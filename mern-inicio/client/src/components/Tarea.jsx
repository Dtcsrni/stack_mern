function Tarea({ tarea, onAlternar, onEliminar }) {
  return (
    <li className="tarea">
      <label className="tarea-label">
        <input
          type="checkbox"
          checked={tarea.completada}
          onChange={() => onAlternar(tarea.id)}
        />
        <span
          className={tarea.completada ? "tarea-completada" : ""}
        >
          {tarea.titulo}
        </span>
      </label>

      <button className="boton-eliminar" onClick={() => onEliminar(tarea.id)}>
        Eliminar
      </button>
    </li>
  );
}

export default Tarea;