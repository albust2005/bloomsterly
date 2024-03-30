import {Municipios,Administradores,Usuarios,Empresas,Reservas,Servicios,Categorias,ControlUsuarios,DescripcionReserva,Fechas,SolicitudEmpresa,AdministradorSolicitud} from '../models/associations.js'
import session from "express-session";
import bcrypt from 'bcrypt';

//Esto cierra la sesion del usuario
export const getlogout = async(req,res)=>{
    req.session.user.destroy((error)=>{
        if (error){
            console.log("error al cerrar sesion ",error)
            res.status(500).json({message: "error al cerrar sesion"})
        }else{
            res.clearCookie('connect.sid');
            res.status(200).json({message: "sesion cerrada correctamente"})
        }
    })
}
export const editarPerfil = async(req,res)=>{
    const {
    email,
    contrasena,
    COD_municipios} = req.body;

    try {
        console.log(req.session.user.COD)
        const hashedPassword = await bcrypt.hash(contrasena,5); 
        await Usuarios.update({
        COD_municipios,
        contrasena: hashedPassword,
        email},
        {where: {COD : req.session.user.COD}})

        res.status(201).json({message:"Perfil actualizado"})
    } catch (error) {
        res.status(400).json({message:"Hubo un error al actualizar los datos", error:error})
    }
}
export const eliminacionPerfil = async(req,res)=>{
    try {
        await Usuarios.destroy({where:{COD:req.session.user.COD}})
        res.status(200).json({message:"Perfil eliminado correctamente"})
    } catch (error) {
        res.status(400).json({message:"Hubo un error al eliminar el perfil", error:error})
    }
}