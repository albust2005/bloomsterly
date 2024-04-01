import {Municipios,Administradores,Usuarios,Empresas,Reservas,Servicios,Categorias,ControlUsuarios,DescripcionReserva,Fechas,SolicitudEmpresa,AdministradorSolicitud} from '../models/associations.js'
import session from "express-session";
import bcrypt from 'bcrypt';

//Esto cierra la sesion de la empresa
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
// Esta funcion es para editar el perfil de la empresa
export const editarPerfil = async(req,res)=>{
    const {
       nombre,
       descripcion,
       COD_municipios,
       instagram,
       facebook,
       contrasena,
       direccion,
       telefono,
       email
    }=req.body
    try {
        const hashedPassword = await bcrypt.hash(contrasena,5); 
        await Empresas.update({
            nombre,
            descripcion,
            COD_municipios,
            instagram,
            facebook,
            contrasena:hashedPassword,
            direccion,
            telefono,
            email
        },{where:{NIT:req.session.userEmpresa.NIT}})
        res.status(201).json({message:"Datos del perfil actualizados"})
    } catch (error) {
        res.status(400).json({message:"Hubo un error al actualizar los datos del perfil", error:error})
    }
}
// Esta funcion es para eliminar el perfil de la empresa
export const eliminarPerfil = async(req,res)=>{
    try {
        await Empresas.destroy({where:{NIT:req.session.userEmpresa.NIT}})
        res.status(200).json({message:"Perfil eliminado correctamente"})
    } catch (error) {
        res.status(400).json({message:"Hubo un error al eliminar el perfil", error:error})
    }
}