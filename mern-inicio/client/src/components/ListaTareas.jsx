import Tarea from "./Tarea";

function ListaTareas({ tareas, onAlternar, onEliminar }) {
  if (tareas.length === 0) {
    return <p className="estado-vacio">No hay tareas pendientes</p>;
  }

  return (
    <ul className="lista-tareas">
      {tareas.map((tarea) => (
        <Tarea
          key={tarea.id}
          tarea={tarea}
          onAlternar={onAlternar}
          onEliminar={onEliminar}
        />
      ))}
    </ul>
  );
}

export default ListaTareas;

     