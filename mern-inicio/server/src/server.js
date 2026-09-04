//Importamos la aplicación Express que configuramos
//en el archivo app.js
import app from './app.js';
//Definimos el puerto en el que escuchará nuestro backend
//Un puerto es una puerta lógica utilizada por una aplicación
//para recibir conexiones de red
const PORT = 5000;
//app.listen() inicia realmente el servidor HTTP
//Esta instrucción hace que Node quede escuchando peticiones
//en el puerto indicado
app.listen(PORT, () => {
    //Esta función se ejecuta cuando el servidor
    //ya consiguió abrir correctamenteel puerto
    console.log('Servidor ejecutandose en http://localhost:${PORT}');
});
