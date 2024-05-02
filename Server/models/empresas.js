// empresas.js
import { DataTypes, Model } from "sequelize";
import db from "../database/db.js";

const Empresas = db.define("empresas", {
  NIT: {
    type: DataTypes.INTEGER(9),
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(40),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING(300),
    allowNull: false,
  },
  COD_municipios: {
    type: DataTypes.INTEGER(2),
  },
  instagram: {
    type: DataTypes.STRING(40),
    allowNull: false,
  },
  direccion: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  facebook: {
    type: DataTypes.STRING(40),
    allowNull: false,
  },
  contrasena: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING(60),
    allowNull: false,
    unique: true,
  },
  image: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
});

// Empresas.belongsTo(Municipios, { foreignKey: 'COD_municipios', as: 'municipio' });
// Empresas.hasMany(Servicios, { foreignKey: 'NIT_empresas', as: 'servicios' });

export default Empresas;
