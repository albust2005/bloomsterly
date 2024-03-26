// administradores.js
import { DataTypes, Model } from "sequelize";
import db from '../database/db.js';
// import exp from "constants";

const AdministradorSolicitud = db.define('administrador_solicitudes',{
  COD_administradores: {
    type: DataTypes.INTEGER(10),
    primaryKey: true
  },
  NIT_empresa_solicitante: {
    type: DataTypes.INTEGER(9),
    primaryKey: true
  }
},{
  timestamps: false
})

// Administradores.belongsTo(Municipios, { foreignKey: 'COD_municipios', as: 'municipio' });
// Administradores.belongsToMany(Usuarios, { through: ControlUsuarios, foreignKey: 'COD_administrador', as: 'usuarios' });

export default AdministradorSolicitud;