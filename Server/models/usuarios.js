// usuarios.js
import { DataTypes, Model } from 'sequelize';
import db from '../database/db.js';


const Usuarios = db.define('usuarios',{
  COD: {
    type: DataTypes.INTEGER(10),
    primaryKey: true
  },
  nombre_c: {
    type: DataTypes.STRING(60),
    allowNull: false,
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
    unique:true
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
  }
})

// Usuarios.belongsTo(Municipios, { foreignKey: 'COD_municipios', as: 'municipio' });
// Usuarios.hasMany(Reservas, { foreignKey: 'COD_usuarios', as: 'reservas' });
// Usuarios.belongsToMany(Administradores, { through: ControlUsuarios, foreignKey: 'COD_usuarios', as: 'administradores' });

export default Usuarios;
