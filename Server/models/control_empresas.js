// control_usuarios.js
import { DataTypes, Model } from 'sequelize';
import db from '../database/db.js';


const ControlEmpresas  = db.define('control_empresas',{
  NIT_empresa: {
    type: DataTypes.INTEGER(9),
    primaryKey: true
  },
  COD_administrador: {
    type: DataTypes.INTEGER(10),
    primaryKey: true
  },
  estado: {
    type: DataTypes.STRING(12),
    allowNull: false
  },
  fecha_cambio: {
    type: DataTypes.DATE,
    allowNull: false
  }
},{
  timestamps: false
})

// ControlUsuarios.belongsTo(Usuarios, { foreignKey: 'COD_usuarios', as: 'usuario' });
// ControlUsuarios.belongsTo(Administradores, { foreignKey: 'COD_administrador', as: 'administrador' });

export default ControlEmpresas;