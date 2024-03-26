import {Municipios,Administradores,Usuarios,Empresas,Reservas,Servicios,Categorias,ControlUsuarios,DescripcionReserva,Fechas,SolicitudEmpresa,AdministradorSolicitud} from '../models/associations.js'
import session from "express-session";
import bcrypt from 'bcrypt';

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
            console.log("esta es la contraseña ingresada por el usuario: ",contrasena)
            // console.log(user.contrasena)
            let comparacion = bcrypt.compareSync(contrasena,user.contrasena)
            console.log("esta es la comparacion: ",comparacion)
            if (comparacion){
                req.session.user = {
                    COD:user.COD,
                    nombre_c:user.nombre_c,
                    primer_apelli: user.primer_apelli,
                    segundo_apelli: user.segundo_apelli,
                    COD_municipios: user.COD_municipios,
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

//Esta parte ingresa informacion de la empresa a la base de datos
export const postempresa = async(req,res)=>{
    const {
        NIT,
        nombre,
        descripcion,
        COD_municipios,
        instragram,
        direccion,
        telefono,
        facebook,
        contrasena,
        username,
        email
    }= req.body
    try {
        const hashedPassword = await bcrypt.hash(contrasena, 5)
        await SolicitudEmpresa.create({
            NIT,
            nombre,
            descripcion,
            COD_municipios,
            instragram,
            direccion,
            telefono,
            facebook,
            contrasena: hashedPassword,
            username,
            email
        })
        res.json({message: "Registro creado correctamente"})
    } catch (error) {
        res.json({message: `Este dato ingresado ya existe: ${error.message}`})
    }
}

//Esta parte valida la informacion del rol de empresa para iniciar sesion
export const getempresa = async(req,res)=>{
    const {username,contrasena} = req.body
    try {
        const user = await SolicitudEmpresa.findOne({where:{ username: username}})
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