//Importamos Express
//Express nos facilita crear un servidor web y definir rutas HTTP
import express from "express";
//Creamos una instancia de la aplicación Express
//app representará nuestro backend
const app = express();
//Este middleware permite que Express interprete
//cuerpos JSON
app.use(express.json());

//Creamos una ruta de prueba
//GET significa que solicitamos información
app.get("/api/salud", (req, res) => {
  //res.json() envia una respuesta en forma JSON
  res.json({
    estado: "ok",
    mensaje: "API funcionando correctamente",
  });
});
//Exportamos la aplicación para que pueda ser utilizada en otros archivos
export default app;


