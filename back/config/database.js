import  Sequelize  from "sequelize";
import * as dotenv from 'dotenv';
dotenv.config();

const db = new Sequelize(
  process.env.DB_NAME || "curso",
  process.env.DB_USER || "postgres",
  process.env.DB_PASSWORD || "159159" ,{
    host: process.env.DB_HOST || "localhost",
    dialect: "postgres",
    loggin: false,
    port: 5432,
    define: {
      timestamp: false
    }
  });

  export default db;
