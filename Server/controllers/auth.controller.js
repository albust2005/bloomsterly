import {Municipios,Administradores,Usuarios,Empresas,Reservas,Servicios,Categorias,ControlUsuarios,DescripcionReserva,Fechas,SolicitudEmpresa,AdministradorSolicitud} from '../models/associations.js'
import session from "express-session";
import bcrypt from 'bcrypt';
import db from '../database/db.js';

const numeroAdmin="1036252517"
//Esta parte ingresa informacion del usuario a la base de datos
export const postuser = async(req,res)=>{
    const {
        COD,
        nombre_c,
        primer_apelli,
        segundo_apelli,
        COD_municipios,
        contrasena,
        username,
        email
    }= req.body
    try {
        const hashedPassword = await bcrypt.hash(contrasena, 5)
        await Usuarios.create({
            COD,
            nombre_c,
            primer_apelli,
            segundo_apelli,
            COD_municipios,
            contrasena: hashedPassword,
            username,
            email
        })
        await ControlUsuarios.create({
            COD_usuarios:COD,
            COD_administrador:numeroAdmin,
            estado:"Activo",
            fecha_cambio:Date.now()
        })
        res.json({message: "Registro creado correctamente"})
    } catch (error) {
        res.status(400).json({message: `La cedula ya esta ingresada en el sistema:`, error:error})
    }
}

//Esta parte valida la informacion del rol de usuario para iniciar sesion
export const getuser = async(req,res)=>{
    const {username,contrasena} = req.body
    try {
        const user = await Usuarios.findOne({where:{ username: username}})
        if (user !== null){
            // console.log("esta es la contraseña ingresada por el usuario: ",contrasena)
            // console.log(user.contrasena)
            let comparacion = bcrypt.compareSync(contrasena,user.contrasena)
            // console.log("esta es la comparacion: ",comparacion)
            if (comparacion){
                const sancion = await Usuarios.findOne({
                    attributes:{},
                    where: {
                        COD: user.COD
                    },
                    include: {
                        model: Administradores,
                        attributes: {}, // Atributos que queremos seleccionar de la tabla Administradores
                        through: {
                            model: ControlUsuarios, // Especificamos la tabla intermedia
                            attributes: {estado} // Atributos que queremos seleccionar de la tabla intermedia
                        }
                    }
                });
                const estado=sancion.administradores[0].control_usuarios.estado
                console.log(typeof estado)
                if (estado=="activo"){
                    req.session.user = {
                    COD:user.COD,
                    nombre_c:user.nombre_c,
                    primer_apelli: user.primer_apelli,
                    segundo_apelli: user.segundo_apelli,
                    COD_municipios: user.COD_municipios,
                    username: user.username,
                    email: user.email
                    }
                    res.status(200).json({message:"Inicio de sesión exitoso", estado:estado})
                }else{
                    res.status(401).json({message:"No puede ingresar ya que esta sancionado", estado:estado})
                }
                }else{
                res.status(401).json({message:"Nombre de usuario y/o contraseña incorrecta"});
            }
        }else{
            res.status(401).json({menssage:"Nombre de usuario y/o contraseña incorrecta"});
        }
    } catch (error) {
        console.log("Error al iniciar sesión", error)
        res.status(401).json({message:"Error al iniciar sesión"});
    }

}

//Esta parte ingresa informacion de la empresa a la base de datos
export const postempresa = async(req,res)=>{
    const {
        NIT,
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
    }= req.body
    try {
        const hashedPassword = await bcrypt.hash(contrasena, 5)
        await SolicitudEmpresa.create({
            NIT,
            nombre,
            descripcion,
            COD_municipios,
            instagram,
            facebook,
            contrasena: hashedPassword,
            username,
            direccion,
            telefono,
            email
        })
        await AdministradorSolicitud.create({COD_administradores:numeroAdmin,NIT_empresa_solicitante:NIT})
        res.status(200).json({message: "Registro creado correctamente"})
    } catch (error) {
        res.status(400).json({message: `Error al insertar la información: ${error.message}`})
    }
}

//Esta parte valida la informacion del rol de empresa para iniciar sesion
export const getempresa = async(req,res)=>{
    const {username,contrasena} = req.body
    try {
        // const user = await SolicitudEmpresa.findOne({where:{ username: username}})
        const user = await Empresas.findOne({where:{ username: username}})
        if (user !== null){
            console.log("esta es la contraseña ingresada por la empresa: ",contrasena)
            // console.log(user.contrasena)
            let comparacion = bcrypt.compareSync(contrasena,user.contrasena)
            console.log("esta es la comparacion: ",comparacion)
            if (comparacion){
                req.session.userEmpresa = {
                    NIT: user.NIT,
                    nombre: user.nombre,
                    descripcion: user.descripcion,
                    COD_municipios: user.COD_municipios,
                    instragram: user.instragram,
                    direccion: user.direccion,
                    telefono: user.telefono,
                    facebook: user.facebook,
                    username: user.username,
                    email: user.email
                }
                res.status(200).json({
                    message:"Inicio de sesión exitoso"
                });
            }else{
                res.status(401).json({message:"Nombre de usuario y/o contraseña incorrecta"});
            }
        }else{
            res.status(401).json({menssage:"Nombre de usuario y/o contraseña incorrecta"});
        }
    } catch (error) {
        console.log("Error al iniciar sesión", error)
        res.status(401).json({message:"Error al iniciar sesión"});
    }
}

//Esta parte valida la informacion del rol de admin para iniciar sesion
export const getadmin = async(req,res)=>{
    const {username,contrasena} = req.body
    try {
        const user = await Administradores.findOne({where:{username:username}});
        if (user!==null){
            console.log("esta es la contraseña ingresada por el admin: ",contrasena)
            // console.log(user.contrasena)
            let comparacion = bcrypt.compareSync(contrasena,user.contrasena)
            console.log("esta es la comparacion: ",comparacion)
            if (comparacion){
                req.session.userAdmin = {
                    COD:user.COD,
                    nombre:user.nombre,
                    primer_apelli:user.primer_apelli,
                    segundo_apelli:user.segundo_apelli,
                    COD_municipios:user.COD_municipios,
                    username:user.username
                }
                res.status(200).json({
                    message:"Inicio de sesión exitoso"
                });
            }else{
                res.status(401).json({menssage:"Nombre de usuario y/o contraseña incorrecta"});
            }
        }else{
            res.status(401).json({menssage:"Nombre de usuario y/o contraseña incorrecta"});
        }
    } catch (error) {
        console.log("Error al iniciar sesión", error)
        res.status(401).json({message:"Error al iniciar sesión"});
    }
}

//Esta funcion de para probar la cargada de las imagenes
export const imagen=async(req,res)=>{
    try {
        res.status(201).json(req.file);
    } catch (error) {
        res.status(400).json({message:"Error al subir la imagen"})
    }
}