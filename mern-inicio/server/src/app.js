//Importamos Express que es el framework que utilizaremos para levantar nuestro servidor HTTP
import express from "express";
//importamos CORS que es un middleware que nos permite controlar el acceso a nuestro backend desde el frontend
import cors from "cors";
//Importamos nuestras variables de entorno para la configuración
import { env } from "./config/env.js";
//Creamos la aplicación Express
const app = express();
//COnfiguramos CORS para permitir el acceso desde el frontend
app.use(
  cors({
    origin: env.clientURL,
  })
);
//Permitimos que Express pueda recibir datos en formato JSON
app.use(express.json());
//Endpoint para comprobar la salud de la API
app.get("/api/salud", (req, res) => {
  res.json({
    estado:"ok",
    mensaje:"Servidor funcionando correctamente"
  });
});

//Exportamos la aplicación para poder utilizarla en otros archivos
export default app;