// servicios.js
import { DataTypes, Model } from 'sequelize';
import db from '../database/db.js';


const Servicios = db.define('servicios',{
  ID: {
    type: DataTypes.STRING(32),
    primaryKey: true
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
  COD_categorias: {
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

// Servicios.belongsTo(Categorias, { foreignKey: 'COD_categorias', as: 'categoria' });
// Servicios.belongsTo(Empresas, { foreignKey: 'NIT_empresas', as: 'empresa' });
// Servicios.hasMany(Fechas, { foreignKey: 'ID_servicios', as: 'fechas' });

export default Servicios;
