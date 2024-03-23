// administradores.js
import { DataTypes, Model } from "sequelize";
import db from '../database/db.js';
// import exp from "constants";

const Administradores = db.define('administradores',{
  COD: {
    type: DataTypes.INTEGER(10),
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  primer_apelli: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  segundo_apelli: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  COD_municipios: {
    type: DataTypes.INTEGER(2),
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
  email: {
    type: DataTypes.STRING(60),
    allowNull: false,
    unique: true
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE
  },
})

// Administradores.belongsTo(Municipios, { foreignKey: 'COD_municipios', as: 'municipio' });
// Administradores.belongsToMany(Usuarios, { through: ControlUsuarios, foreignKey: 'COD_administrador', as: 'usuarios' });

export default Administradores;
