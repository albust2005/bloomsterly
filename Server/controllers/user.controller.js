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
} from "../models/associations.js";
import session from "express-session";
import bcrypt from "bcrypt";

//Esto cierra la sesion del usuario
export const getlogout = async (req, res) => {
  req.session.user.destroy((error) => {
    if (error) {
      console.log("error al cerrar sesion ", error);
      res.status(500).json({ message: "error al cerrar sesion" });
    } else {
      res.clearCookie("connect.sid");
      res.status(200).json({ message: "sesion cerrada correctamente" });
    }
  });
};
export const editarPerfil = async (req, res) => {
  const { email, contrasena, COD_municipios } = req.body;

  try {
    console.log(req.session.user.COD);
    const hashedPassword = await bcrypt.hash(contrasena, 5);
    await Usuarios.update(
      {
        COD_municipios,
        contrasena: hashedPassword,
        email,
      },
      { where: { COD: req.session.user.COD } }
    );

    res.status(201).json({ message: "Perfil actualizado" });
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
      res
        .status(400)
        .json({ message: "Hubo un error al editar perfil", error });
    }
  }
};
export const eliminacionPerfil = async (req, res) => {
  try {
    await Usuarios.destroy({ where: { COD: req.session.user.COD } });
    res.status(200).json({ message: "Perfil eliminado correctamente" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Hubo un error al eliminar el perfil", error: error });
  }
};
// esto sirve para obtener las subcategorias
export const subcategorias = async (req, res) => {
  try {
    const subcategoria = await Categorias.findAll();
    res.status(200).json(subcategoria);
  } catch (error) {
    if (error instanceof Sequelize.DatabaseError) {
      // Manejar el error de base de datos
      res
        .status(400)
        .json({ message: `Error de base datos`, error: error.message });
    } else {
      // Manejar otros tipos de errores
      res.status(400).json({
        message: "Hubo error al traer la información de la categoria",
        error,
      });
    }
  }
};
// esto sirve para extraer todos los servicios 
export const servicios = async(req,res)=>{
  try {
    const servicio= await Servicios.findAll()
    res.status(200).json(servicio)
  } catch (error) {
    if (error instanceof Sequelize.DatabaseError) {
      // Manejar el error de base de datos
      res
        .status(400)
        .json({ message: `Error de base datos`, error: error.message });
    } else {
      // Manejar otros tipos de errores
      res.status(400).json({
        message: "Hubo error al traer la información de servicios",
        error,
      });
    }
  }
}
export const getAllEmpresas = async (req, res) => {
  try {
    const empresas = await Empresas.findAll();
    res.status(200).json(empresas);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error al traer a todas las empresas", error: error });
  }
};
