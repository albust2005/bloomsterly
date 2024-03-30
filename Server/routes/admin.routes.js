import express from "express";
import { postadmin, getlogout, editarPefil, sancionarUsuarios, getAllUsuarios, AllSolicitudes, aceptacion, buscarUsuarios } from "../controllers/admin.controller.js";

// esto es para poner rutas
const router = express.Router()

//middleware
// rutas protegidas por sesion
router.use((req, res, next)=>{
    if (req.session.userAdmin) {
        next(); //continuar si hay una sesion activa
    }else{
        res.status(401).json({message: "Acceso no autorizado"})
    }
})

// ruta para crear un nuevo administrador
router.post("/crear",postadmin);
// ruta para cerrar sesion
router.get("/loginout",getlogout);
// ruta para editar el perfil del administrador
router.put("/editarPerfil",editarPefil);
// ruta para traer a todos los usuarios a la interfaz de administrador
router.get("/getAllUsuarios",getAllUsuarios);
// ruta para sancionar a un usuario
router.put("/sancionarUsuario",sancionarUsuarios);
// ruta para la solicitud de empresas
router.get("/AllSolicitudes",AllSolicitudes);
// ruta para migrar datos de la tabla solicitud_empresas a empresas
router.post("/aceptacion",aceptacion);
// ruta para buscar usuario
router.post("/buscarUsuario",buscarUsuarios);
export default router