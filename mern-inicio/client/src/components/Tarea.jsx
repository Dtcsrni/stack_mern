function Tarea({ tarea, onAlternar, onEliminar }) {
  return (
    <tr className="tarea-fila">
      <td>
        <label className="tarea-label">
          <input
            type="checkbox"
            checked={tarea.completada}
            onChange={() => onAlternar(tarea.id)}
          />
          <span className={tarea.completada ? "estado-completada" : "estado-pendiente"}>
            {tarea.nombre}
          </span>
        </label>
      </td>
      <td>
        <span className={tarea.completada ? "estado-completada" : "estado-pendiente"}>
          {tarea.completada ? "Completada" : "Pendiente"}
        </span>
      </td>
      <td>
        <button className="boton-eliminar" onClick={() => onEliminar(tarea.id)}>
          Eliminar
        </button>
      </td>
    </tr>
  );
}

export default Tarea;
