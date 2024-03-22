// municipios.js
import { DataTypes, Model } from 'sequelize';
import db from '../database/db.js';

const Municipios = db.define('municipios',{
  COD: {
    type: DataTypes.INTEGER(2),
    primaryKey: true
  },
  municipio: {
    type: DataTypes.STRING(30),
    allowNull: false
  }
},{
  timestamps: false
})


export default Municipios;
