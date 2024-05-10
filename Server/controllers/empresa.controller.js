import { Municipios, Administradores, Usuarios, Empresas, Reservas, Servicios, Categorias, ControlUsuarios, DescripcionReserva, Fechas, SolicitudEmpresas, AdministradorSolicitud, Subcategorias, ImagesServicios } from '../models/associations.js'
import session from "express-session";
import bcrypt from 'bcrypt';
import Sequelize, { where } from 'sequelize';
import fs from 'fs';
import path from 'path';
import { baseDir } from '../server.js';

//Esto cierra la sesion de la empresa
export const getlogout = async (req, res) => {
    req.session.destroy((error) => {
        if (error) {
            console.log("error al cerrar sesion ", error)
            res.status(500).json({ message: "error al cerrar sesion" })
        } else {
            res.clearCookie('connect.sid');
            res.status(200).json({ message: "sesion cerrada correctamente" })
        }
    })
}
// Esta funcion es para editar el perfil de la empresa
export const editarPerfil = async (req, res) => {
    const {
        nombre,
        descripcion,
        COD_municipios,
        instagram,
        facebook,
        contrasena,
        direccion,
        telefono,
        email
    } = req.body
    try {
        const hashedPassword = await bcrypt.hash(contrasena, 5);
        await Empresas.update({
            nombre,
            descripcion,
            COD_municipios,
            instagram,
            facebook,
            contrasena: hashedPassword,
            direccion,
            telefono,
            email
        }, { where: { NIT: req.userCOD } })
        res.status(201).json({ message: "Datos del perfil actualizados" })
    } catch (error) {
        if (error instanceof Sequelize.UniqueConstraintError) {
            // Manejar el error de restricción de unicidad
            res.status(400).json({ message: `Los datos ingresados ya existen en el sistema`, error: error.errors })
        } else if (error instanceof Sequelize.DatabaseError) {
            // Manejar el error de base de datos
            res.status(400).json({ message: `Error de base datos`, error: error.message })
        } else {
            // Manejar otros tipos de errores
            res.status(400).json({ message: 'Hubo un error al editar perfil', error });
        }
    }
}
// Esta funcion es para eliminar el perfil de la empresa
export const eliminarPerfil = async (req, res) => {
    try {
        await Empresas.destroy({ where: { NIT: req.userCOD } })
        res.status(200).json({ message: "Perfil eliminado correctamente" })
    } catch (error) {
        res.status(400).json({ message: "Hubo un error al eliminar el perfil", error: error })
    }
}
// Esta funcion es para obtener la informacion de la empresa por el token
export const getempresa = async (req, res) => {
    try {
        const dato = req.userCOD
        const datos = await Empresas.findOne({ where: { NIT: dato } })
        res.status(200).json(datos)
    } catch (error) {
        if (error instanceof Sequelize.DatabaseError) {
            // Manejar el error de base de datos
            res.status(400).json({ message: `Error de base datos`, error: error.message })
        } else {
            // Manejar otros tipos de errores
            res.status(400).json({ message: 'Hubo un error al obtener informacion de la empresa', error });
        }
    }
}

// Esta funcion crea un nuevo servicio vinculada a la cuenta de la empresa
export const servicio = async (req, res) => {
    const {
        nombre,
        descripcion,
        valor_servicio,
        COD_subCategoria,
    } = req.body
    try {
        const servicio = await Servicios.create({
            nombre,
            descripcion,
            valor_servicio,
            COD_subCategoria,
            NIT_empresas: req.userCOD
        })
        let image
        // if (!req.files || req.files.length === 0) {
        //     res.status(400).json({ message: "Subir imagen" })
        // }
        req.files.forEach(async (file) => {
            image = file.filename
            await ImagesServicios.create({
                ID_servicio: servicio.ID,
                image
            })
        });
        res.status(201).json({ message: "Servicio creado correctamente" })
    } catch (error) {
        if (error instanceof Sequelize.DatabaseError) {
            // Manejar el error de base de datos
            res.status(400).json({ message: `Error de base datos`, error: error.message })
        } else {
            // Manejar otros tipos de errores
            res.status(400).json({ message: 'Hubo un error al crear el servicio', error });
        }
    }
}
// Esta funcion sirve para editar la reserva realizada por la empresa
export const editarServicio = async (req, res) => {
    const {
        ID,
        nombre,
        descripcion,
        valor_servicio,
        COD_subCategoria,
    } = req.body

    const ruta = baseDir()
    // console.log(ruta)
    try {
        const imagenes = await ImagesServicios.findAll(
            {
                where: { ID_servicio: ID }
            })

        imagenes.map(async (imagen) => {
            const filePath = path.join(ruta, imagen.image);
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
                // console.log("La ruta del archivo es: ", filePath)
            } else {
                console.log("El archivo no exite en la ubicacion")
            }
        });

        await Servicios.update({
            nombre,
            descripcion,
            valor_servicio,
            COD_subCategoria,
            NIT_empresas: req.userCOD
        }, {
            where: { ID: ID }
        });

        await ImagesServicios.destroy({ where: { ID_servicio: ID } })

        let image
        req.files.forEach(async (file) => {
            image = file.filename
            await ImagesServicios.create({
                ID_servicio: ID,
                image
            })
        });

        res.status(200).json({ message: "Servicio actualizado correctamente" })
    } catch (error) {
        if (error instanceof Sequelize.DatabaseError) {
            // Manejar el error de base de datos
            res.status(400).json({ message: `Error de base datos`, error: error.message })
        } else {
            // Manejar otros tipos de errores
            res.status(400).json({ message: 'Hubo un error al actualizar el servicio', error });
        }
    }
}
// Esta funcion trae a todos los servicios de la empresa
export const getservicios = async (req, res) => {
    try {
        const servicios = await Servicios.findAll({ where: { NIT_empresas: req.userCOD } })
        res.status(200).json(servicios)
    } catch (error) {
        if (error instanceof Sequelize.DatabaseError) {
            // Manejar el error de base de datos
            res.status(400).json({ message: `Error de base datos`, error: error.message })
        } else {
            // Manejar otros tipos de errores
            res.status(400).json({ message: 'Hubo un error al obtener los servicios', error });
        }
    }
}
// Esta funcion obtiene las reservas por parte de los clientes a la empresa
export const reservasCliente = async (req, res) => {
    try {
        const servicios = await Servicios.findAll({
            attributes: ['ID', 'NIT_empresas'],
            include: [
                {
                    model: Reservas,
                    attributes: ['COD','COD_usuarios', 'telefono', 'direccion'],
                    through: {
                        model: DescripcionReserva
                    }
                }
            ],
            where: { NIT_empresas: req.userCOD },
        })
        const clientes = []
        const numeroReservas = []
        const codUsuariosVistos = [];
        let info
        servicios.forEach((servicio) => {
            servicio.reservas.forEach((reserva) => {
                const cliente = reserva?.COD_usuarios
                if (cliente !== null) {
                    
                    if (!codUsuariosVistos.includes(reserva.COD)){
                        info={
                            COD:reserva.COD,
                            cliente:cliente
                        }
                        numeroReservas.push(info)
                    }
                    clientes.push(cliente)
                    codUsuariosVistos.push(reserva.COD);
                }
            })
        })
        // Esta parte filtra los COD_usuarios repetidos para solo poner un COD_usuarios en otra array nueva
        const codUsuariosUnicos = clientes.filter((valor, indice, arreglo) => {
            return arreglo.indexOf(valor) === indice;
        });
        let dato, formato, nombre, apellido, email, numero
        const datos = []
        codUsuariosUnicos.map(async (cliente, indice) => {
            try {
                dato = await Usuarios.findOne({ where: { COD: cliente } })
                numero=numeroReservas.filter((usuario)=>{
                    if (usuario.cliente == cliente){
                        return usuario
                    } 
                })
                nombre = dato.nombre_c
                apellido = dato.primer_apelli
                email = dato.email
                formato = {
                    COD: cliente,
                    nombre,
                    apellido,
                    email,
                    numeroReservas: numero.length,
                    cod_reservas: numero.map((cod)=>{
                        return cod.COD
                    })
                }
                // console.log(formato)
                datos.push(formato)
                // console.log(datos)
                if ((codUsuariosUnicos.length - 1) === indice){
                    res.status(200).json(datos)
                }
            } catch (error) {
                if (error instanceof Sequelize.DatabaseError) {
                    // Manejar el error de base de datos
                    res.status(400).json({ message: `Error de base datos`, error: error.message })
                } else {
                    // Manejar otros tipos de errores
                    res.status(400).json({ message: 'Hubo un error al obtener los clientes', error });
                }
            }
        })
        // res.status(200).json(servicios)
    } catch (error) {
        if (error instanceof Sequelize.DatabaseError) {
            // Manejar el error de base de datos
            res.status(400).json({ message: `Error de base datos`, error: error.message })
        } else {
            // Manejar otros tipos de errores
            res.status(400).json({ message: 'Hubo un error al obtener los clientes', error });
        }
    }
}
// Esta funcion sirve para obtener los datos del servicio selecccionado
export const servicio1 = async(req,res)=>{
    const {
        id
    }=req.body
    try {
        const servicio= await Servicios.findOne({where:{ID:id}})
        res.status(200).json(servicio)
    } catch (error) {
        if (error instanceof Sequelize.DatabaseError) {
          // Manejar el error de base de datos
          res
            .status(400)
            .json({ message: `Error de base datos`, error: error.message });
        } else {
          // Manejar otros tipos de errores
          res
            .status(400)
            .json({ message: "Hubo un error al obtener el servicio", error });
        }
    }
}
// Esta funcion sirve para eliminar un servicio
export const eliminarServicio = async(req,res)=>{
    const {
        ID
    }=req.body
    const ruta = baseDir()
    try {
        const imagenes = await ImagesServicios.findAll({
                where: { ID_servicio: ID }
        })
        // imagenes.map(async (imagen) => {
        //     const filePath = path.join(ruta, imagen.image);
        //     if (fs.existsSync(filePath)) {
        //         fs.unlinkSync(filePath);
        //         // console.log("La ruta del archivo es: ", filePath)
        //     } else {
        //         console.log("El archivo no exite en la ubicacion")
        //     }
        // });
        // await ImagesServicios.destroy({ where: { ID_servicio: ID } })
        // await DescripcionReserva.destroy
        await Servicios.destroy({ where: { ID: ID } })
        res.status(200).json({message:"Servicio eliminado correctamente"})
    } catch (error) {
        if (error instanceof Sequelize.DatabaseError) {
            // Manejar el error de base de datos
            res.status(400).json({ message: `Error de base datos`, error: error.message })
        } else {
            // Manejar otros tipos de errores
            res.status(400).json({ message: 'Hubo un error al eliminar el servicio', error });
        }
    }
}
// Esta funcion trae las reservas seleccionadas por cliente
// export const reservaSeleccionada = async(req,res)=>{
//     const {reservas}=req.body
//     // let formato
//     // let COD, COD_usuarios, fecha_reserva, fecha_evento, valor_total, direccion, telefono, nombre, estado
//     try {
//         let datos = []
//         reservas.map( async(reserva,index)=>{
//             try {
//                 const dato = await Reservas.findOne({where:{COD:reserva}})
//                     let formato={
//                         COD: dato.COD,
//                         COD_usuarios:dato.COD_usuarios,
//                         fecha_reserva:dato.fecha_reserva,
//                         fecha_evento:dato.fecha_evento,
//                         valor_total:dato.valor_total,
//                         direccion:dato.direccion,
//                         telefono:dato.telefono,
//                         nombre:dato.nombre,
//                         estado:dato.estado
//                     }
//                     datos.push(formato)

//                 if ((reservas.length-1)==index){
//                     res.status(200).json(datos)
//                 }
//             } catch (error) {
//                 if (error instanceof Sequelize.DatabaseError) {
//                     // Manejar el error de base de datos
//                     res.status(400).json({ message: `Error de base datos`, error: error.message })
//                 } else {
//                     // Manejar otros tipos de errores
//                     res.status(400).json({ message: 'Hubo un error al obtener las reservas por una', error });
//                 }
//             }
//         });
//     } catch (error) {
//         if (error instanceof Sequelize.DatabaseError) {
//             // Manejar el error de base de datos
//             res.status(400).json({ message: `Error de base datos`, error: error.message })
//         } else {
//             // Manejar otros tipos de errores
//             res.status(400).json({ message: 'Hubo un error al obtener las reservas', error });
//         }
//     }
// }
export const reservaSeleccionada = async(req, res) => {
    const { reservas } = req.body;

    try {
        let datos = [];

        for (const reserva of reservas) {
            try {
                const dato = await Reservas.findOne({ where: { COD: reserva } });

                let formato = {
                    COD: dato.COD,
                    COD_usuarios: dato.COD_usuarios,
                    fecha_reserva: dato.fecha_reserva,
                    fecha_evento: dato.fecha_evento,
                    valor_total: dato.valor_total,
                    direccion: dato.direccion,
                    telefono: dato.telefono,
                    nombre: dato.nombre,
                    estado: dato.estado
                };

                datos.push(formato);
            } catch (error) {
                if (error instanceof Sequelize.DatabaseError) {
                    res.status(400).json({ message: `Error de base de datos`, error: error.message });
                } else {
                    res.status(400).json({ message: 'Hubo un error al obtener las reservas por una', error });
                }
            }
        }

        res.status(200).json(datos); // Mover la respuesta aquí fuera del bucle
    } catch (error) {
        if (error instanceof Sequelize.DatabaseError) {
            res.status(400).json({ message: `Error de base de datos`, error: error.message });
        } else {
            res.status(400).json({ message: 'Hubo un error al obtener las reservas', error });
        }
    }
};
// Esta funcion sirve para aceptar reserva al cliente
export const aceptarReserva = async(req,res)=>{
    const {COD}=req.body
    try {
        await Reservas.update({estado:"Aceptado"},{
            where:{COD:COD}
        })
        res.status(200).json({message:"Reserva aceptada correctamente"})
    } catch (error) {
        if (error instanceof Sequelize.DatabaseError) {
            res.status(400).json({ message: `Error de base de datos`, error: error.message });
        } else {
            res.status(400).json({ message: 'Hubo un error al aceptar la reserva', error });
        }
    }
}
// Esta funcion sirve para aceptar reserva al cliente
export const negarReserva = async(req,res)=>{
    const {COD}=req.body
    try {
        await Reservas.update({estado:"Negado"},{
            where:{COD:COD}
        })
        res.status(200).json({message:"Reserva negada correctamente"})
    } catch (error) {
        if (error instanceof Sequelize.DatabaseError) {
            res.status(400).json({ message: `Error de base de datos`, error: error.message });
        } else {
            res.status(400).json({ message: 'Hubo un error al negar la reserva', error });
        }
    }
}