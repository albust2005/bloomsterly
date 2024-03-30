import express from "express";
import { getuser, postuser, postempresa, getempresa } from "../controllers/auth.controller.js";
import { getlogout, editarPerfil, eliminacionPerfil } from "../controllers/user.controller.js";

// esto es para poner rutas
const router = express.Router()

// rutas protegidas por sesion
router.use((req, res, next)=>{
    if (req.session.user) {
        next(); //continuar si hay una sesion activa
    }else{
        res.status(401).json({message: "Acceso no autorizado"})
    }
})

// ruta para cerrar sesion
router.post("/loginout",getlogout);
// ruta para editar el perfil del usuario
router.put("/editarPerfil",editarPerfil);
// ruta para eliminar el perfil del usuario
router.delete("/eliminarPerfil",eliminacionPerfil);
export default router