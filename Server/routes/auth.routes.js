import express from "express";
import { getuser, postuser, postempresa, getempresa, getadmin, imagen } from "../controllers/auth.controller.js";
import { upload } from "../multer/multer.js";
// esto es para poner rutas
const router = express.Router()

// ruta para iniciar sesion como usuario
router.get("/login/usuario",getuser);
// ruta para iniciar sesion como empresa
router.get("/login/empresa",getempresa);
// ruta para registrar un usuario
router.post("/registeruser",postuser);
// ruta para registrar una empresa
router.post("/registerempresa", postempresa);
// ruta para iniciar sesion como admin
router.get("/login/admin",getadmin);
// ruta de prueba para cargar las imagenes
router.post("/imagen",upload.single('imagen'),imagen);
export default router