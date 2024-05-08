import express from "express";
import { getlogout, editarPerfil, eliminarPerfil, getempresa, servicio, editarServicio, getservicios, reservasCliente, servicio1} from "../controllers/empresa.controller.js";
import jwt from 'jsonwebtoken'
import { upload } from "../multer/multer.js";
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
router.use("/getempresa", express.static('imagenes'));

// ruta para cerrar sesion
router.post("/loginout",getlogout);
// ruta para editar el perfil de la empresa
router.put("/editarPerfil", verificarToken, editarPerfil);
// ruta para eliminar el perfil de la empresa
router.delete("/eliminarPerfil", verificarToken, eliminarPerfil);
// ruta para obtener la informacion de la empresa por el token
router.get("/getempresa",verificarToken,getempresa);
// ruta para hacer un servicio la empresa
router.post("/crearServicio",verificarToken, upload.array("imagenes") ,servicio);
// ruta para editar un servicio de la empresa
router.post("/editarServicio", verificarToken, upload.array("imagenes"), editarServicio);
// ruta para obtener todos los servicios de las empresa
router.get("/servicios", verificarToken, getservicios);
// ruta para obtener informacion del servicio seleccionado
router.post("/servicio",verificarToken,servicio1)
// ruta para mostrar todos las reservas de los clientes a la empresa
router.get("/reservasClientes", verificarToken, reservasCliente)

export default router