// reservas.js
import { DataTypes, Model } from 'sequelize';
import db from '../database/db.js';


const Reservas = db.define('reservas',{
  COD: {
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
  }
},{
  timestamps: false
})


// Reservas.belongsTo(Usuarios, { foreignKey: 'COD_usuarios', as: 'usuario' });
// Reservas.belongsToMany(Servicios, { through: 'DescripcionReserva', foreignKey: 'COD_reservas', as: 'servicios' });

export default Reservas;
