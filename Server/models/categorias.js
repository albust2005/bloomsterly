// categorias.js
import { DataTypes, Model } from "sequelize";
import db from "../database/db.js";

const Categorias = db.define(
  "categorias",
  {
    COD: {
      type: DataTypes.INTEGER(4),
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
    categoria: {
      type: DataTypes.STRING(4),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

// Categorias.hasMany(Servicios, { foreignKey: 'COD_categorias', as: 'servicios' });

export default Categorias;
