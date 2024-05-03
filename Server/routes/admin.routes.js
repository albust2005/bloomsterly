import express from "express";
import { postadmin, getlogout, editarPefil, sancionarUsuarios, getAllUsuarios, AllSolicitudes, aceptacion, buscarUsuarios, sancionarEmpresa, getAllEmpresas, solicitud, negar, getAllAdministradores, getadmin, eliminacionPerfil } from "../controllers/admin.controller.js";
import jwt from 'jsonwebtoken'
// esto es para poner rutas
const router = express.Router();

router.use("/AllSolicitudes", express.static("imagenes"))
router.use("/solicitud", express.static("imagenes"))

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
  
// ruta para crear un nuevo administrador
router.post("/crear", postadmin);
// ruta para cerrar sesion
router.post("/loginout", getlogout);
// ruta para editar el perfil del administrador
router.put("/editarPerfil", verificarToken, editarPefil);
// ruta para eliminar cuenta del administrador
router.get("/eliminarPerfil",verificarToken, eliminacionPerfil);
// ruta para traer a todos los usuarios a la interfaz de administrador
router.get("/getAllUsuarios", verificarToken, getAllUsuarios);
// ruta para sancionar a un usuario
router.put("/sancionarUsuario", verificarToken, sancionarUsuarios);
// ruta para la solicitud de empresas
router.get("/AllSolicitudes", AllSolicitudes);
// ruta para migrar datos de la tabla solicitud_empresas a empresas
router.post("/aceptacion", verificarToken, aceptacion);
// ruta para buscar usuario
router.get("/buscarUsuario/:username", buscarUsuarios);
// ruta para sancionar a una empresa
router.put("/sancionarEmpresa", verificarToken, sancionarEmpresa);
// ruta para mostrar a todas las empresas
router.get("/getAllEmpresas", verificarToken, getAllEmpresas);
// ruta para mostrar la solicitud de la empresa
router.post("/solicitud",solicitud);
// ruta para negar acceso a una solicitud de una empresa
router.post("/negar",verificarToken, negar);
// ruta para obtener todos los administradores
router.get("/getAllAdministradores",getAllAdministradores)
// ruta para obtener la informacion del administrador
router.get("/getadmin",verificarToken,getadmin)
export default router;
