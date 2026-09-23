function Tarea({ tarea, onAlternar, onEliminar }) {
  return (
    <tr className="tarea-fila">
      <td>
        <label className="tarea-label">
          <input
            type="checkbox"
            checked={tarea.completada}
            onChange={() => onAlternar(tarea._id)}
          />
          <span className={tarea.completada ? "estado-completada" : "estado-pendiente"}>
            {tarea.titulo}
          </span>
        </label>
      </td>
      <td>
        <span className={tarea.completada ? "estado-completada" : "estado-pendiente"}>
          {tarea.completada ? "Completada" : "Pendiente"}
        </span>
      </td>
      <td>
        <button className="boton-eliminar" onClick={() => onEliminar(tarea._id)}>
          Eliminar
        </button>
      </td>
    </tr>
  );
}

export default Tarea;
