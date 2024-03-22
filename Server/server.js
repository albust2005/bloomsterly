import express  from "express";
import cors from "cors";
import session from "express-session";
// //importar la conexion de la bd
import db from "./database/db.js"

// //importar las rutas 
import auth from "./routes/auth.routes.js";
import user from "./routes/user.routes.js";
import admin from "./routes/admin.routes.js";
import empresa from "./routes/empresa.routes.js";

// iniciamos el servidor
const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'tu_secreto',
    resave: false,
    saveUninitialized: true,
}));

//rutas para la navegacion
app.use('/', auth);
app.use('/user', user);
app.use('/admin', admin);
app.use('/empresa', empresa);

//Esto comprueba la conexion a la base de datos
try {
    await db.authenticate()
    console.log("conexion exitosa a la bd")
} catch (error) {
    console.log ("Error al conectar a la bd ", error)
}

// esto es para probar el funcionamiento
// app.get("/",(req, res)=>{
//     res.send("hola mundo");
// })

//indicando al servidor que se maneje en el puerto 8000
app.listen(8000, ()=>{
    console.log("server up running in http://localhost:8000/")
})