// fechas.js
import { DataTypes, Model } from 'sequelize';
import db from '../database/db.js';

const Fechas = db.define('fechas',{
  ID_servicios: {
    type: DataTypes.STRING(32),
    primaryKey: true
  },
  fecha_reservada: {
    type: DataTypes.DATE,
    allowNull: false
  }
},{
  timestamps: false
})

// Fechas.belongsTo(Servicios, { foreignKey: 'ID_servicios', as: 'servicio' });

export default Fechas;
