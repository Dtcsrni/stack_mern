//Importamos el modelo Tarea
//Con este modelo podremos operar directamente los documentos almacenados en MongoDB
import Tarea from "../models/Tarea.js";

//Listamos todas las tareas almacenadas en la base de datos
export async function listaTareas(req, res) {
  try {
    const tareas = await Tarea.find().sort({ createdAt: -1 }); // -1 implica un orden descendente, es decir, de la más reciente a la más antigua
    return res.json(tareas);
  } catch (error) {
    //Si sucede un error de base de datos, se devuelve un error 500
    return res.status(500).json({
      mensaje: "Error al obtener las tareas",
      error: error.message,
    });
  }
}

//Creación de tareas
export async function crearTarea(req, res) {
  try {
    const { titulo } = req.body;
    //Validación básica
    //Comprobamos que exista el título y que no esté vacío
    if (!titulo || titulo.trim() === "") {
      return res.status(400).json({
        mensaje: "El título es obligatorio",
      });
    }

    //Creamos el documento al cual Mongo asignará automaticamente un _id único
    const tarea = await Tarea.create({
      titulo: titulo.trim(),
    });
    return res.status(201).json(tarea);
  } catch (error) {
    //Si sucede un error
    return res.status(500).json({
      mensaje: "Error al crear la tarea",
      error: error.message,
    });
  }
}

export async function actualizarTarea(req, res) {
  try {
    const { id } = req.params;
    const { completada } = req.body;

    //Buscar el documento por su identificador e MongoDB
    //modificar unicamente el campo completada
    //new: true permite que Mongoose devuelva el documento despues de haber sido 
    //actualizado
    const tarea = await Tarea.findByIdAndUpdate(
      id,
      { completada },
      { new: true } // Esto hace que se devuelva el documento actualizado
    );

    //Si no existe una tarea con un identificador 
    //findbyIdAndUpdate devuelve null
    if (!tarea) {
      return res.status(404).json({
        mensaje: "Tarea no encontrada",
      });
    } 

    return res.json({
      mensaje: "Tarea actualizada correctamente",
      tarea: tarea
    });
  } catch (error) {
    //Si sucede un error
    return res.status(500).json({
      mensaje: "Error interno al ejecutar la operacion",
      error: error.message,
    });
  } 
}

export async function eliminarTarea(req, res) {
      try {
        const { id } = req.params;

        //Buscar el documento por su identificador e MongoDB
        //Si no existe una tarea con un identificador
        //findbyIdAndDelete devuelve null
        const tarea = await Tarea.findByIdAndDelete(id);

        //Comprobamos si la tarea fue encontrada y eliminada
        if (!tarea) {
          return res.status(404).json({
            mensaje: "Tarea no encontrada",
          });
        }

        //COnfirmar al cliente si la operación fue exitosa
        return res.json({
          mensaje: "Tarea eliminada correctamente",
        });

        //Confirmamos al cliente que la operación terminó correctamente y devolvemos el documento eliminado
        return res.json({
          mensaje: "Tarea eliminada correctamente",
          tarea: tarea
        });
      } catch (error) {
        //Si sucede un error
        return res.status(500).json({
          mensaje: "Error interno al ejecutar la operacion",
          error: error.message,
        });
      } 
    }
    