import { useEffect, useState } from "react";
import "./App.css";
import Encabezado from "./components/Encabezado";
import FormularioTarea from "./components/FormularioTarea";
import ListaTareas from "./components/ListaTareas";
import ResumenTareas from "./components/ResumenTareas";


function App() {
  //Se inicializa el estado de las tareas como un arreglo vacío
  const [tareas, setTareas] = useState([]);

  const API_URL = import.meta.env.VITE_API_URL;

  function agregarTarea(titulo) {
    const nuevaTarea = {
      id: crypto.randomUUID(),
      titulo,
      completada: false,
    };

    setTareas((tareasActuales) => [...tareasActuales, nuevaTarea]);
  }

  function alternarTareas(id) {
    setTareas((tareasActuales) =>
      tareasActuales.map((tarea) =>
        tarea.id === id
          ? { ...tarea, completada: !tarea.completada }
          : tarea
      )
    );
  }

  function eliminarTarea(id) {
    setTareas((tareasActuales) =>
      tareasActuales.filter((tarea) => tarea.id !== id)
    );
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
