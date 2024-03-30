// solicitud_empresa.js
import { DataTypes, Model } from "sequelize";
import db from '../database/db.js';
// import exp from "constants";

const SolicitudEmpresa = db.define('solicitud_empresas',{
  NIT: {
    type: DataTypes.INTEGER(9),
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING(300),
    allowNull: false
  },
  COD_municipios: {
    type: DataTypes.INTEGER(2),
    allowNull: false
  },
  instagram: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  facebook: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  contrasena: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  username: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  },
  direccion: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  telefono: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(60),
    allowNull: false,
    unique: true
  }
},{
  timestamps: false
})

// Administradores.belongsTo(Municipios, { foreignKey: 'COD_municipios', as: 'municipio' });
// Administradores.belongsToMany(Usuarios, { through: ControlUsuarios, foreignKey: 'COD_administrador', as: 'usuarios' });

export default SolicitudEmpresa;