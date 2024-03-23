import express from "express";
import { postadmin, getlogout } from "../controllers/admin.controller.js";

// esto es para poner rutas
const router1 = express.Router()

//middleware
// rutas protegidas por sesion
router1.use((req, res, next)=>{
    if (req.session.userAdmin) {
        next(); //continuar si hay una sesion activa
    }else{
        res.json({message: "Acceso no autorizado"})
    }
})

// ruta para crear un nuevo administrador
router1.post("/crear",postadmin);

// ruta para cerrar sesion
router1.get("/loginout",getlogout);

export default router1