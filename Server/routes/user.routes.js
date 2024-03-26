import express from "express";
import { getuser, postuser, postempresa, getempresa } from "../controllers/auth.controller.js";
import { getlogout } from "../controllers/user.controller.js";

// esto es para poner rutas
const router = express.Router()

// rutas protegidas por sesion
router.use((req, res, next)=>{
    if (req.session.user) {
        next(); //continuar si hay una sesion activa
    }else{
        res.json({message: "Acceso no autorizado"})
    }
})

// ruta para cerrar sesion
router.get("/loginout",getlogout);

export default router