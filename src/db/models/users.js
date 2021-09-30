import sequelize from "../index.js";

import s from "sequelize";
const { DataTypes } = s;

const Category = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  surname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email : {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
  }
},
{
    timestamps: false,
  });

export default Category;