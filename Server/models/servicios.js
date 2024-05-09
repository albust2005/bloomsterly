// servicios.js
import { DataTypes, Model } from 'sequelize';
import db from '../database/db.js';


const Servicios = db.define('servicios',{
  ID: {
    type: DataTypes.STRING(32),
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING(300),
    allowNull: false
  },
  valor_servicio: {
    type: DataTypes.INTEGER(14),
    allowNull: false
  },
  COD_subCategoria: {
    type: DataTypes.INTEGER(4),
    allowNull: false
  },
  NIT_empresas: {
    type: DataTypes.INTEGER(9),
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE
  }
})

export default Servicios;
