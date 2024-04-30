// subcategorias.js
import { DataTypes, Model } from "sequelize";
import db from "../database/db.js";

const Subcategorias = db.define("subcategorias",{
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
    image: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    uuid_categoria: {
        type: DataTypes.STRING(4),
        allowNull: false
    }
  },
  {
    timestamps: false,
  }
);

export default Subcategorias;