import Tarea from "./Tarea";

//ListaTareas recibe el arreglo de tareas y la función alternarTareas como props
function ListaTareas({ tareas, onAlternar, onEliminar }) {
//Primero comprobamos si el arreglo está vacío
if (tareas.length === 0) {
    //Si está vacío, mostramos un mensaje
    return(
        <p className="estado-vacio">
        No hay tareas pendientes
        </p>
    );
}

//Si existen tareas, renderizamos el listado

return (
    <ul className="lista-tareas">
        {
            //Recorremos el arreglo de tareas con map
        }
        {tareas.map((tarea) => (//Map recorre cada objeto del arreglo
        //Por cada elemento, creamos un componente tarea
        <Tarea
            key={tarea.id}//Cada elemento necesita un key único
            tarea={tarea}//Enviamos el objeto tarea al componente Tarea
            onAlternar={onAlternar}//Enviamos la función alternarTareas al componente Tarea
            onEliminar={onEliminar}//Enviamos la función eliminarTarea al componente Tarea
        />
        ))}
    </ul>
);
}
export default ListaTareas;

     