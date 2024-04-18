import express from "express";
import { getuser, postuser, postempresa, getempresa } from "../controllers/auth.controller.js";
import { getlogout, editarPerfil, eliminarPerfil } from "../controllers/empresa.controller.js";

// esto es para poner rutas
const router = express.Router()

// rutas protegidas por sesion
// router.use((req, res, next)=>{
//     if (req.session.userEmpresa) {
//         next(); //continuar si hay una sesion activa
//     }else{
//         res.status(401).json({message: "Acceso no autorizado"})
//     }
// })

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

export default router