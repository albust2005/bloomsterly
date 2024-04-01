import express from "express";
import { getuser, postuser, postempresa, getempresa } from "../controllers/auth.controller.js";
import { getlogout, editarPerfil, eliminarPerfil } from "../controllers/empresa.controller.js";

// esto es para poner rutas
const router = express.Router()

// rutas protegidas por sesion
router.use((req, res, next)=>{
    if (req.session.userEmpresa) {
        next(); //continuar si hay una sesion activa
    }else{
        res.status(401).json({message: "Acceso no autorizado"})
    }
})

// ruta para cerrar sesion
router.post("/loginout",getlogout);
// ruta para editar el perfil de la empresa
router.put("/editarPerfil",editarPerfil);
// ruta para eliminar el perfil de la empresa
router.delete("/eliminarPerfil",eliminarPerfil);

export default router