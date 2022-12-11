import db from "../config/database.js";   // coneccion a la base de datos
import { Sequelize } from "sequelize";


const { DataTypes } = Sequelize;

const Course = db.define('courses', {

  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name_course: {
    type: DataTypes.STRING,
  },
  description_course: {
    type: DataTypes.STRING,
  },
  image_course: {
    type: DataTypes.STRING,/// no se si es correcto
  },
  kind: {
    type: DataTypes.INTEGER,
  },
  created_on: {
    type: DataTypes.DATE,
    field: 'created_on',
    defaultValue: Sequelize.NOW
  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_on',
    defaultValue: Sequelize.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    field: 'created_on',
    defaultValue: Sequelize.NOW
  }

},{
    tableName: 'courses'
  });

export default Course;
