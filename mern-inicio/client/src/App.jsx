import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Encabezado from "./components/Encabezado";
import FormularioTarea from "./components/FormularioTarea";
import ListaTareas from "./components/ListaTareas";
import ResumenTareas from "./components/ResumenTareas";


function App() {
  //Se inicializa el estado de las tareas como un arreglo vacío
  const [tareas, setTareas] = useState([]);

  const API_URL = import.meta.env.VITE_API_URL;

  const obtenerTareas = useCallback(async () => {
    try {
      //fetch realiza una petición http
      //al no especificar el método, por defecto es GET
      const respuesta = await fetch(API_URL);

      //Se verifica el código de respuesta http
      //Será verdadero cuando el servidor responda con un código 200
      if(!respuesta.ok) {
        throw new Error(`Error al obtener las tareas: ${respuesta.statusText}`);
      }

      //Convertimos el cuerpo del JSON en un valor de JavaScript
      const datos = await respuesta.json();

      //Guardamos las tareas obtenidas del servidor
      //dentro de un estado de React. Al modificar el estado,
      //React vuelve a renderizar el componente
      setTareas(datos);
    } catch (error) {
      console.error("Error al obtener las tareas:", error);
    }
  }, [API_URL]);
  //useEffect permite ejecutar una operación despues de renderizar
  //el componente 
  //El arreglo vacío indica que este efecto 
  //debe ejecutarse solamente cuando 
  //la app se monta por primera vez
  useEffect(() => {
    obtenerTareas();
  }, [obtenerTareas]);
  //Crea una nueva tarea enviandola al backend y actualizando el estado de las tareas
  async function agregarTarea(tarea) {
    try {
      //Enviamos una petición POST al endpoint de la api
      //POST /api/tareas
      const respuesta = await fetch(API_URL, {
        //método POST para creacion de recursos
        method: "POST",
        //Indicampos que el contenido enviado
        //en el cuerpo de la petición es JSON
        headers: {
          "Content-Type": "application/json",
        },
        //Convertimos el objeto de Javascript a una cadena JSON antes de enviarlo
        body: JSON.stringify({ titulo: tarea }),
      });
      if(!respuesta.ok) {
        throw new Error(`Error al agregar la tarea: ${respuesta.statusText}`);
      }

      //Obtenemos la tarea creada desde la respuesta del servidor
      const nuevaTarea = await respuesta.json();

      //Incorporamos al estado de React la tarea devuelta por MongoDB
      setTareas((tareasActuales) => [nuevaTarea, ...tareasActuales]);
    } catch (error) {
      console.error("Error al agregar la tarea:", error);
    }
  }
  async function alternarTareas(id) {
    try {
      //Buscamos el estado actual de la tarea
      //que corresponde al identificador recibido
    
      const tareaActual = tareas.find(
        (tarea) => tarea._id === id);

      //Si por alguna razón no se encuentra la tarea
      //se detiene la operación y se muestra error en consola
      if(!tareaActual) {
        throw new Error('Tarea no encontrada');
      }
        //al endpoint de la API para alternar el estado de completada de la tarea
        const respuesta = await fetch(`${API_URL}/${id}`, {
          //Método patch para modificar parcialmente un recurso existente
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          //Enviamos el nuevo estado de completada en el cuerpo de la petición
          body: JSON.stringify({ completada: !tareaActual.completada }),
        });
        
        if(!respuesta.ok) {
          throw new Error(`Error al alternar la tarea: ${respuesta.statusText}`);
        }

        //En el estado actual del backend
        //actualizarTarea() no devuelve directamente la tarea, si no que
        //devuelve un objeto con un mensaje de éxito y la tarea actualizada
        //{mensaje: "Tarea actualizada", tarea: {...} }
        const datos = await respuesta.json();
        //Extraemos unicamente el documento actualizado
        const tareaActualizada = datos.tarea;
        //Recorremos el arreglo de tareas y reemplazamos la tarea actualizada
        setTareas((tareasActuales) =>
          //Cuando encontramos la tarea correspondiente
        //la sustituimos por el documento actualizado devuelto
        //por mongodb
          tareasActuales.map((tarea) =>
            tarea._id === id ? tareaActualizada : tarea
          )
        );
    }
      catch (error) {
        console.error("Error al alternar la tarea:", error);
      }

  }
  //Eliminamos una tarea primero en mongodb
  //y posteriormente se elimina del Estado de React
  async function eliminarTarea(id) {
    try {
      //Solicitamos al backend eliminar el recurso
      //correspondiente por medio de DELETE al endpoint de la API
      const respuesta = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      if(!respuesta.ok) {
        throw new Error(`Error al eliminar la tarea: ${respuesta.statusText}`);
      }
      //La tarea de mongo ya fue eliminada
      //ahora actualizamos el estado de React eliminando la tarea del arreglo
      setTareas((tareasActuales) =>
        tareasActuales.filter((tarea) => tarea._id !== id)
      );
    }
    catch (error) {
      console.error("Error al eliminar la tarea:", error);
    }
  }

  const total = tareas.length;
  const completadas = tareas.filter((tarea) => tarea.completada).length;

  return (
    <main>
      <Encabezado
        titulo="Administrador de Tareas"
        subtitulo="Aplicación creada con React"
      />

      <FormularioTarea onAgregarTarea={agregarTarea} />

      <ListaTareas
        tareas={tareas}
        onAlternar={alternarTareas}
        onEliminar={eliminarTarea}
      />

      <ResumenTareas total={total} completadas={completadas} />
    </main>
  );
}

export default App;