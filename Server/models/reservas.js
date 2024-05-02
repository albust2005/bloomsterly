// reservas.js
import { DataTypes, Model } from 'sequelize';
import db from '../database/db.js';


const Reservas = db.define('reservas',{
  COD: {
    autoIncrement: true,
    type: DataTypes.INTEGER(12),
    primaryKey: true
  },
  COD_usuarios: {
    type: DataTypes.INTEGER(10),
    allowNull: false
  },
  fecha_reserva: {
    type: DataTypes.DATE,
    allowNull: false
  },
  fecha_evento: {
    type: DataTypes.DATE,
    allowNull: false
  },
  valor_total: {
    type: DataTypes.INTEGER(12),
    allowNull: false
  },
  direccion: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  telefono: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  estado: {
    type: DataTypes.STRING(20),
    allowNull: false
  }
},{
  timestamps: false
})

export default Reservas;
