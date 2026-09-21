//Definimos el componente individual Tarea
function Tarea({ tarea, onAlternar, onEliminar }) {
    //Función que se ejecuta cuando el usuario
    //hace click en el checkbox
    return(
        <li className="tarea">
            <label>
            <input
                type="checkbox"
                //El checkbox estará marcado si la propiedad completada es true
                checked={tarea.completada}
                //Cuando cambia el checkbox, se envia el id de la tarea
                onChange={() => onAlternar(tarea.id)}
            />
            <span 
            //Aplicamos una clase cambiante dependiendo si la tarea
            // esta completada o no
            className={tarea.completada ? "tarea-completada" : ""}>
            </span>
                
            </label>
            <button className="boton-eliminar"
            //Al hacer click enviamos el id de la tarea a eliminar
            onClick={() => onEliminar(tarea.id)}>Eliminar </button>
        </li>
    );
}
export default Tarea;