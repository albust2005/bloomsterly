import {
  Municipios,
  Administradores,
  Usuarios,
  Empresas,
  Reservas,
  Servicios,
  Categorias,
  ControlUsuarios,
  DescripcionReserva,
  Fechas,
  SolicitudEmpresas,
  AdministradorSolicitud,
  Subcategorias,
  ImagesServicios,
  ControlEmpresas,
} from "../models/associations.js";
import session from "express-session";
import bcrypt from "bcrypt";
import db from "../database/db.js";
import Sequelize from "sequelize";
import jwt from "jsonwebtoken";

const numeroAdmin = "1036252517";
//Esta parte ingresa informacion del usuario a la base de datos
export const postuser = async (req, res) => {
  const {
    COD,
    nombre_c,
    primer_apelli,
    COD_municipios,
    contrasena,
    username,
    email,
  } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(contrasena, 5);
    await Usuarios.create({
      COD,
      nombre_c,
      primer_apelli,
      COD_municipios,
      contrasena: hashedPassword,
      username,
      email,
    });
    await ControlUsuarios.create({
      COD_usuarios: COD,
      COD_administrador: numeroAdmin,
      estado: "Activo",
      fecha_cambio: Date.now(),
    });
    res.json({ message: "Registro creado correctamente" });
  } catch (error) {
    if (error instanceof Sequelize.UniqueConstraintError) {
      // Manejar el error de restricción de unicidad
      res.status(400).json({
        message: `Los datos ingresados ya existen en el sistema`,
        error: error.errors,
      });
    } else if (error instanceof Sequelize.DatabaseError) {
      // Manejar el error de base de datos
      res
        .status(400)
        .json({ message: `Error de base datos`, error: error.message });
    } else {
      // Manejar otros tipos de errores
      res.status(400).json({ message: "Error inesperado", error });
    }
  }
};

//Esta parte valida la informacion del rol de usuario para iniciar sesion
export const getuser = async (req, res) => {
  const { username, contrasena } = req.body;
  console.log(username, contrasena);
  try {
    const user = await Usuarios.findOne({ where: { username: username } });
    if (user !== null) {
      console.log(
        "esta es la contraseña ingresada por el usuario: ",
        contrasena
      );
      console.log(user.contrasena);
      let comparacion = bcrypt.compareSync(contrasena, user.contrasena);
      // console.log("esta es la comparacion: ",comparacion)
      if (comparacion) {
        const sancion = await Usuarios.findOne({
          attributes: ["COD"],
          where: {
            COD: user.COD,
          },
          include: {
            model: Administradores,
            attributes: ["COD"], // Atributos que queremos seleccionar de la tabla Administradores
            through: {
              model: ControlUsuarios, // Especificamos la tabla intermedia
              attributes: ["estado"], // Atributos que queremos seleccionar de la tabla intermedia
            },
          },
        });
        const estado = sancion.administradores[0].control_usuarios.estado;
        console.log(typeof estado);
        if (estado == "Activo") {
          const token = jwt.sign(
            { userCOD: user.COD, rol: "usuario" },
            "secreto",
            { expiresIn: "7d" }
          );
          res
            .status(200)
            .json({ message: "Inicio de sesión exitoso", token: token });
        } else {
          res.status(401).json({
            message: "No puede ingresar ya que esta sancionado",
            estado: estado,
          });
        }
      } else {
        res
          .status(401)
          .json({ message: "Nombre de usuario y/o contraseña incorrecta" });
      }
    } else {
      res
        .status(401)
        .json({ menssage: "Nombre de usuario y/o contraseña incorrecta" });
    }
  } catch (error) {
    console.log("Error al iniciar sesión", error);
    res.status(400).json({ message: "Error al iniciar sesión" });
  }
};

//Esta parte ingresa informacion de la empresa a la base de datos
export const postempresa = async (req, res) => {
  const {
    NIT,
    nombre,
    descripcion,
    COD_municipios,
    instagram,
    facebook,
    contrasena,
    username,
    direccion,
    telefono,
    email,
  } = req.body;
  let image;
  if (req.file) {
    image = req.file.filename;
  } else {
    image = null;
  }
  try {
    const hashedPassword = await bcrypt.hash(contrasena, 5);
    await SolicitudEmpresas.create({
      NIT,
      nombre,
      descripcion,
      COD_municipios,
      instagram,
      facebook,
      contrasena: hashedPassword,
      username,
      direccion,
      telefono,
      image,
      email,
      estado: "Pendiente"
    });
    await AdministradorSolicitud.create({
      COD_administradores: numeroAdmin,
      NIT_empresa_solicitante: NIT,
    });
    res.status(200).json({ message: "Registro creado correctamente" });
  } catch (error) {
    if (error instanceof Sequelize.UniqueConstraintError) {
      // Manejar el error de restricción de unicidad
      res.status(400).json({
        message: `Los datos ingresados ya existen en el sistema`,
        error: error.errors,
      });
    } else if (error instanceof Sequelize.DatabaseError) {
      // Manejar el error de base de datos
      res
        .status(400)
        .json({ message: `Error de base datos`, error: error.message });
    } else {
      // Manejar otros tipos de errores
      res.status(400).json({ message: "Error inesperado", error });
    }
  }
};

//Esta parte valida la informacion del rol de empresa para iniciar sesion
export const getempresa = async (req, res) => {
  const { username, contrasena } = req.body;
  try {
    // const user = await SolicitudEmpresa.findOne({where:{ username: username}})
    const user = await Empresas.findOne({ where: { username: username } });
    if (user !== null) {
      console.log(
        "esta es la contraseña ingresada por la empresa: ",
        contrasena
      );
      // console.log(user.contrasena)
      let comparacion = bcrypt.compareSync(contrasena, user.contrasena);
      console.log("esta es la comparacion: ", comparacion);
      if (comparacion) {
        const sancion = await Empresas.findOne({
          attributes: ["NIT"],
          where: {
            NIT: user.NIT,
          },
          include: {
            model: Administradores,
            attributes: ["COD"],
            through: {
              model: ControlEmpresas,
              attributes: ["estado"],
            },
          },
        });
        const estado = sancion.administradores[0].control_empresas.estado;
        console.log(estado)
        if (estado == "Activo"){
          const token = jwt.sign(
            { userCOD: user.NIT, rol: "empresa" },
            "secreto",
            { expiresIn: "7d" }
          );
          res.status(200).json({
            message: "Inicio de sesión exitoso",
            token: token,
          });
        }else{
          res.status(401).json({
            message: "No puede ingresar ya que esta sancionado",
            estado: estado,
          });
        }
      } else {
        res
          .status(401)
          .json({ message: "Nombre de usuario y/o contraseña incorrecta" });
      }
    } else {
      res
        .status(401)
        .json({ menssage: "Nombre de usuario y/o contraseña incorrecta" });
    }
  } catch (error) {
    if (error instanceof Sequelize.UniqueConstraintError) {
      // Manejar el error de restricción de unicidad
      res.status(400).json({
        message: `La cedula ya esta ingresada en el sistema:`,
        error: error.errors,
      });
    } else if (error instanceof Sequelize.DatabaseError) {
      // Manejar el error de base de datos
      res
        .status(400)
        .json({ message: `Error de base datos:`, error: error.message });
    } else {
      // Manejar otros tipos de errores
      res.status(400).json({ message: "Error inesperado:", error });
    }
  }
};

//Esta parte valida la informacion del rol de admin para iniciar sesion
export const getadmin = async (req, res) => {
  const { username, contrasena } = req.body;
  try {
    const user = await Administradores.findOne({
      where: { username: username },
    });
    if (user !== null) {
      console.log("esta es la contraseña ingresada por el admin: ", contrasena);
      // console.log(user.contrasena)
      let comparacion = bcrypt.compareSync(contrasena, user.contrasena);
      console.log("esta es la comparacion: ", comparacion);
      if (comparacion) {
        // console.log(req.session.userAdmin)
        const token = jwt.sign({ userCOD: user.COD, rol: "admin" }, "secreto", {
          expiresIn: "7d",
        });
        res.status(200).json({
          message: "Inicio de sesión exitoso administrador",
          token: token,
        });
      } else {
        res
          .status(401)
          .json({ message: "Nombre de usuario y/o contraseña incorrecta" });
      }
    } else {
      res
        .status(401)
        .json({ message: "Nombre de usuario y/o contraseña incorrecta" });
    }
  } catch (error) {
    console.log("Error al iniciar sesión", error);
    res.status(401).json({ message: "Error al iniciar sesión" });
  }
};

//Esta funcion de para probar la cargada de las imagenes
export const imagen = async (req, res) => {
  try {
    res.status(201).json(req.file);
  } catch (error) {
    res.status(400).json({ message: "Error al subir la imagen" });
  }
};

export const perfil = async (req, res) => {
  try {
    if (req.session.user) {
      const sesion = req.session.user;
      res.status(200).json({ message: "Hay una sesión abierta", sesion });
    } else if (req.session.userAdmin) {
      const sesion = req.session.userAdmin;
      res.status(200).json({ message: "Hay una sesión abierta", sesion });
    } else if (req.session.userEmpresa) {
      const sesion = req.session.userEmpresa;
      res.status(200).json({ message: "Hay una sesión abierta", sesion });
    } else {
      res.status(401).json({ message: "No tiene una sesión abierta" });
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: "Hubo un error al comprobar la sesión", error });
  }
};
