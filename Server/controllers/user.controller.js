import {Municipios,Administradores,Usuarios,Empresas,Reservas,Servicios,Categorias,ControlUsuarios,DescripcionReserva,Fechas,SolicitudEmpresa,AdministradorSolicitud} from '../models/associations.js'
import session from "express-session";
import bcrypt from 'bcrypt';

//Esto cierra la sesion del usuario
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