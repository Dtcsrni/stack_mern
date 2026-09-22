import Tarea from "./Tarea";

function ListaTareas({ tareas, onAlternar, onEliminar }) {
  if (tareas.length === 0) {
    return <p className="estado-vacio">No hay tareas pendientes</p>;
  }

  return (
    <div className="tabla-contenedor">
      <table className="tabla-tareas">
        <thead>
          <tr>
          <th scope="col">Tarea</th>
          <th scope="col">Estado</th>
          <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tareas.map((tarea) => (
            <Tarea
              key={tarea.id}
              tarea={tarea}
              onAlternar={onAlternar}
              onEliminar={onEliminar}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaTareas;

     