// images_servicios.js
import { DataTypes, Model } from 'sequelize';
import db from '../database/db.js';

const ImagesServicios = db.define('images_servicios',{
  ID_servicios: {
    type: DataTypes.STRING(32),
    primaryKey: true
  },
  image: {
    type: DataTypes.STRING(200),
    allowNull: false
  }
},{
  timestamps: false
})


export default ImagesServicios;