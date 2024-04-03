import {Municipios,Administradores,Usuarios,Empresas,Reservas,Servicios,Categorias,ControlUsuarios, ControlEmpresas,DescripcionReserva,Fechas,SolicitudEmpresa,AdministradorSolicitud} from '../models/associations.js'
import session from "express-session";
import bcrypt from 'bcrypt';
import { Op } from 'sequelize';

//Esta parte ingresa informacion de un administrador a la base de datos
export const postadmin = async(req,res)=>{
    const {
        COD,
        nombre,
        primer_apelli,
        segundo_apelli,
        COD_municipios,
        contrasena,
        username,
        email
    }= req.body
    try {
        const hashedPassword = await bcrypt.hash(contrasena, 5)
        await Administradores.create({
            COD,
            nombre,
            primer_apelli,
            segundo_apelli,
            COD_municipios,
            contrasena:hashedPassword,
            username,
            email
        })
        res.json({message: "Registro creado correctamente del admin"})
    } catch (error) {
        if (error.message="Validation error"){
            res.json({message:"Este dato ya existe:", error})
        }else{
            res.json({message: `Hubo un error al crear un administrador: ${error.message}`})
        }
    }
}
//Esto cierra la sesion del administrador
export const getlogout = async(req,res)=>{
    req.session.destroy((error)=>{
        if (error){
            console.log("error al cerrar sesion ",error)
            res.status(500).json({message: "error al cerrar sesion"})
        }else{
            res.clearCookie('connect.sid');
            res.status(200).json({message: "sesion cerrada correctamente"})
        }
    })
}
//Esta parte editar el perfil del administrador
export const editarPefil = async(req,res)=>{
    const {
        COD_municipios,
        contrasena,
        email
    }=req.body
    try {
        const hashedPassword=await bcrypt.hash(contrasena,5)
        await Administradores.update({
            COD_municipios,
            contrasena:hashedPassword,
            email
        },{where:{COD:req.session.userAdmin.COD}})
        res.status(201).json({message:"Datos actualizados correctamente"})
    } catch (error) {
        res.status(400).json({message:"Hubo un error al actualizar los datos del perfil", error:error})
    }
}
//Esta parte muestra a todos los usuarios en la interfaz de administrador
export const getAllUsuarios = async(req,res)=>{
    try {
        const usuarios= await Usuarios.findAll({
            attributes:['username','email'],
            include:[{
                model:Administradores,
                attributes:['COD'],
                through:{
                    model:ControlUsuarios,
                    attributes:['estado']
                }
            }]
        });
        // let datos=[]
        // console.log(usuarios[0].username)
        // console.log(usuarios[0].email)
        // console.log(usuarios[0].administradores[0].control_usuarios.estado)
        // console.log(datos)
        res.status(200).json(usuarios)
    } catch (error) {
        res.status(400).json({message:"Error al traer a todos los usuarios",error:error})
    }
}
//Esta parte permite al administrador sancionar a usuarios
export const sancionarUsuarios= async(req,res)=>{
    const {username}=req.body
    try {
        const nombreusuario=await Usuarios.findOne({where:{username:username}})
        const codusuario=nombreusuario.COD
        const usuario=await ControlUsuarios.findOne({where:{COD_usuarios:codusuario}})
        const COD=req.session.userAdmin.COD
        if (usuario.estado=="Activo"){
            const estado="Sancionado"
            console.log(codusuario)
            await ControlUsuarios.update({COD_administrador:COD,estado,fecha_cambio:Date.now()},{where:{COD_usuarios:codusuario}})
            res.status(201).json({message:"Usuario sancionado"})
        }else{
            if(usuario.estado=="Sancionado"){
                const estado="Activo"
                console.log(codusuario)
                await ControlUsuarios.update({COD_administrador:COD,estado,fecha_cambio:Date.now()},{where:{COD_usuarios:codusuario}})
                res.status(201).json({message:"Al usuario seleccionado se le ha quitado la sanción correctamente"})
            }
        }
    } catch (error) {
        res.status(400).json({message:"Hubo un error al sancionar el usuario",error:error})
    }
}
//Esta parte trae todas las empresas que piden que las ingresen al aplicativo
export const AllSolicitudes= async(req,res)=>{
    try {
        const solicitudes=await SolicitudEmpresa.findAll({attributes:{exclude:['contrasena','username']}})
        res.status(200).json(solicitudes)
    } catch (error) {
        res.status(400).json({message:"Hubo un error al traer los datos de las empresas solicitantes"})
    }
}
//Esta parte pone lo que hay de informacion de la tabla solicitud_empresa y la pone en empresas
export const aceptacion= async(req,res)=>{
    const {NIT}=req.body
    try {
        const COD_administrador=req.session.userAdmin.COD
        // await AdministradorSolicitud.update(COD_administrador,{where:{NIT_empresa_solicitante:NIT}})
        const empresas=await SolicitudEmpresa.findOne({where:{NIT:NIT}});
        const nit=empresas.NIT
        const nombre=empresas.nombre
        const descripcion=empresas.descripcion
        const COD_municipios=empresas.COD_municipios
        const instagram=empresas.instagram
        const facebook=empresas.facebook
        const contrasena=empresas.contrasena
        const username=empresas.username
        const direccion=empresas.direccion
        const telefono=empresas.telefono
        const email=empresas.email
        await Empresas.create({
            NIT:nit,
            nombre,
            descripcion,
            COD_municipios,
            instagram,
            facebook,
            contrasena,
            username,
            direccion,
            telefono,
            email
        })
        const estado="Activo"
        await ControlEmpresas.create({
            NIT_empresa:nit,
            COD_administrador:COD_administrador,
            estado:estado,
            fecha_cambio: Date.now()
        })
        await AdministradorSolicitud.destroy({where:{NIT_empresa_solicitante:NIT}})
        await SolicitudEmpresa.destroy({where:{NIT:NIT}})
        res.status(201).json({message:"Se migrarón los datos correctamente",empresas}) 
    } catch (error) {
        res.status(400).json({message:"Hubo un error a la hora de migrar la informacion de la empresa",error:error})
    }
}
//Esta parte trae la informacion del buscador de usuarios por medio de una letra
export const buscarUsuarios= async(req,res)=>{
    const username=req.params.username
    try {
        const usuarios=await Usuarios.findAll({
            attributes:['COD'],
            where:{
            username:{ 
                [Op.like]:`${username}%`
            }}
        })
        let codigos=[]
        usuarios.map((usuario)=>{
            codigos.push(usuario.COD)
        });
        let informacion=[]
        for (let codigo of codigos){
            const u=await Usuarios.findOne({
                attributes:['username','email'],
                where:{
                    COD:codigo
                },
                include:[{
                    model:Administradores,
                    attributes:['COD'],
                    through:{
                        model:ControlUsuarios,
                        attributes:['estado']
                    }
                }]
            })
            informacion=informacion.concat(u)
        }
            // const cod=usuarios.COD
        res.status(200).json(informacion)
    } catch (error) {
        res.status(400).json({message:"Hubo error al traer el usuario",error:error})
    }
}

//Esta parte sanciona a una empresa o la desanciona
export const sancionarEmpresa= async(req,res)=>{
    const {username}=req.body
    try {
        const nombreempresa=await Empresas.findOne({where:{username:username}})
        const NIT_empresa=nombreempresa.NIT
        const empresa=await ControlEmpresas.findOne({where:{NIT_empresa:NIT_empresa}})
        const COD=req.session.userAdmin.COD
        if (empresa.estado=="Activo"){
            const estado="Sancionado"
            console.log(NIT_empresa)
            await ControlEmpresas.update({COD_administrador:COD,estado,fecha_cambio:Date.now()},{where:{NIT_empresa:NIT_empresa}})
            res.status(201).json({message:"Empresa sancionada"})
        }else{
            if(empresa.estado=="Sancionado"){
                const estado="Activo"
                console.log(NIT_empresa)
                await ControlEmpresas.update({COD_administrador:COD,estado,fecha_cambio:Date.now()},{where:{NIT_empresa:NIT_empresa}})
                res.status(201).json({message:"A la empresa seleccionada se le ha quitado la sanción correctamente"})
            }
        }
    } catch (error) {
        res.status(400).json({message:"Hubo un error al sancionar la empresa",error:error})
    }
}
//Esta parte muestra a todas las empresas
export const getAllEmpresas = async(req,res)=>{
    try {
        const empresas= await Empresas.findAll({
            attributes:['username','email'],
            include:[{
                model:Administradores,
                attributes:['COD'],
                through:{
                    model:ControlEmpresas,
                    attributes:['estado']
                }
            }]
        });
        res.status(200).json(empresas)
    } catch (error) {
        res.status(400).json({message:"Error al traer a todas las empresas",error:error})
    }
}