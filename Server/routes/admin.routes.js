import express from "express";
import { postadmin, getlogout, editarPefil, sancionarUsuarios, getAllUsuarios, AllSolicitudes, aceptacion, buscarUsuarios, sancionarEmpresa, getAllEmpresas, solicitud, negar, getAllAdministradores } from "../controllers/admin.controller.js";

// esto es para poner rutas
const router = express.Router();

//middleware
// rutas protegidas por sesion
// router.use((req, res, next)=>{
//     if (req.session.userAdmin) {
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
  

// ruta para crear un nuevo administrador
router.post("/crear", postadmin);
// ruta para cerrar sesion
router.post("/loginout", getlogout);
// ruta para editar el perfil del administrador
router.put("/editarPerfil", verificarToken, editarPefil);
// ruta para traer a todos los usuarios a la interfaz de administrador
router.get("/getAllUsuarios", getAllUsuarios);
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
router.get("/getAllEmpresas", getAllEmpresas);
// ruta para mostrar la solicitud de la empresa
router.post("/solicitud",solicitud);
// ruta para negar acceso a una solicitud de una empresa
router.post("/negar",negar);
router.get("/getAllAdministradores",getAllAdministradores)
export default router;
