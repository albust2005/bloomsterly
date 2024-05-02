// descripcion_reserva.js
import { DataTypes, Model } from 'sequelize';
import db from '../database/db.js';


const DescripcionReserva = db.define('descripcion_reservas',{
  COD_reservas: {
    type: DataTypes.INTEGER(11),
    primaryKey: true
  },
  ID_servicios: {
    type: DataTypes.STRING(32),
    primaryKey: true
  },
  descripción: {
    type: DataTypes.STRING(300),
    allowNull: false
  },
  valor_servicio: {
    type: DataTypes.INTEGER(12),
    allowNull: false
  }
},{
  timestamps: false
})

// DescripcionReserva.belongsTo(Reservas, { foreignKey: 'COD_reservas', as: 'reserva' });
// DescripcionReserva.belongsTo(Servicios, { foreignKey: 'ID_servicios', as: 'servicio' });

export default DescripcionReserva;
