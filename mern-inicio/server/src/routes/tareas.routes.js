import express from "express";
//Importar las funciones que ejecutarán
//la lógica de negocio en cada petición

import{
    listaTareas,
    crearTarea,
    actualizarTarea,
    eliminarTarea
} from "../controllers/tareas.controller.js";

//Creamos un enrutador (Router) para agrupar rutas relacionadas al mismo recurso
const router = express.Router();

//GET 
//Esta ruta permite la consulta de tareas
router.get(
"/", 
listaTareas
)
//POST
//Ruta para crear nuevos recursos
router.post(
"/",
crearTarea
)

//Actualizar parcialmente una tarea, en este caso solo el campo completada
router.patch(
"/:id",
actualizarTarea
)

//Elimina la tarea con el identificador especificado
router.delete(
"/:id",
eliminarTarea
)

export default router;