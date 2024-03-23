import {Municipios,Administradores,Usuarios,Empresas,Reservas,Servicios,Categorias,ControlUsuarios,DescripcionReserva,Fechas,SolicitudEmpresa,AdministradorSolicitud} from '../models/associations.js'
import session from "express-session";
import bcrypt from 'bcrypt';

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
        res.json({message: `Este dato ingresado ya existe: ${error.message}`})
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