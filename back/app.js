import express from 'express';
import cors from "cors";
import db from './config/database.js';


import router from './routes/routes.js';

const app = express();


app.use(express.json());

app.use(cors());

try {
    await db.authenticate();
    console.log('coneccion establecida.');
  } catch (error) {
    console.error('imposible conectar a la base de datos', error);
}


app.use(router);

app.listen(4001, () => {
  console.log('Brian , estamos con el proyecto final , corriendo en el puerto 4001...')
})

export default app;