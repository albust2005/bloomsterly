import express from "express";
import { getlogout, editarPerfil, eliminarPerfil, getempresa } from "../controllers/empresa.controller.js";
import jwt from 'jsonwebtoken'

// esto es para poner rutas
const router = express.Router()
const verificarToken=(req,res, next)=>{
    const token = req.headers['authorization'];
    if (!token){
        return res.status(401).json({message: 'Token no proporcionado'})
    }
    jwt.verify(token,'secreto',(err,decodedToken)=>{
    if (err){
        return res.status(403).json({message: 'Token inválido'})
    }
    req.userCOD = decodedToken.userCOD;
    req.rol= decodedToken.rol;
    next()
    });
}

// ruta para cerrar sesion
router.post("/loginout",getlogout);
// ruta para editar el perfil de la empresa
router.put("/editarPerfil", verificarToken, editarPerfil);
// ruta para eliminar el perfil de la empresa
router.delete("/eliminarPerfil", verificarToken, eliminarPerfil);
// ruta para obtener la informacion de la empresa por el token
router.get("/getempresa",verificarToken,getempresa)
export default router