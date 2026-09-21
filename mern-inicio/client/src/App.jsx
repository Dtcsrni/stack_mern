import { useState } from "react";
import "./App.css";
import Encabezado from "./components/Encabezado";
import FormularioTarea from "./components/FormularioTarea";
import ListaTareas from "./components/ListaTareas";
import ResumenTareas from "./components/ResumenTareas";

const tareasIniciales = [
  {
    id: "t1",
    titulo: "Revisar estructura del proyecto",
    completada: true,
  },
  {
    id: "t2",
    titulo: "Practicar componentes de React",
    completada: false,
  },
  {
    id: "t3",
    titulo: "Preparar conexión con la APP",
    completada: false,
  },
];

function App() {
  const [tareas, setTareas] = useState(tareasIniciales);

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
