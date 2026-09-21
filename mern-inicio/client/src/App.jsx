import {useState} from "react";
import "./App.css";
import Encabezado from "./components/Encabezado";
import FormularioTarea from "./components/FormularioTarea";
import ListaTareas from "./components/ListaTareas";
import ResumenTareas from "./components/ResumenTareas";

//Creamos un arreglo inicial de tareas locales hardcodeadas
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
{  id: "t3",
  titulo: "Preparar conexión con la APP",
  completada: false,
}
]
//Componente principal
function App() {
  //Creamos el estado de "Tareas" 
  const [tareas, setTareas] = useState(tareasIniciales);
//tareas: Contiene el arreglo definido anteriormente
//setTareas es la función que utilizamos para modificar el estado de "Tareas"
//tareasIniciales: Es el valor inicial del estado de "Tareas"

//Función que recibe el titulo escrito por el usuario 
//y crea un nuevo objeto tipo Tarea
  function agregarTarea(titulo) {
    //Construimos el objeto "nuevaTarea" con los datos que necesitamos
    const nuevaTarea = {
      id: crypto.randomUUID(), //Generamos un id aleatorio
      titulo: titulo,
      completada: false,
    };

    //Actualizamos el estado de "Tareas" agregando la nueva tarea al arreglo de tareas existentes
    setTareas((tareasActuales) => [...tareasActuales, nuevaTarea]);
    }

    //Esta función cambia una tarea de pendiente a completada y viceversa, dependiendo de su estado actual
    function alternarTareas(id){
      setTareas((tareasActuales) =>
        tareasActuales.map((tarea) =>
          //Buscamos la tarea que coincide con el id recibido
          tarea.id === id 
      ? {
        //Copiamos las propiedades actuales
        ...tarea, 
        //Invertimos el valor booleano        
        completada: !tarea.completada} 
      //Si el id no coincide, regresamos la tarea sin cambios
        : tarea
        )
      );
      
    }

    //Esta función elimina una tarea del arreglo de tareas, filtrando por id
    function eliminarTarea(id){
      //Filtramos el arreglo conservando solamente
      //los elementos cuya condición sea verdadera
      setTareas ((tareasActuales) => 
        tareasActales.filter(
          //Conservamos todas las tareas cuyo id sea diferente
          //al id recibido por parámetro. Las que coinciden se eliminan
          (tarea) => tarea.id !== id
        ));
    }

    //Datos derivados
    //No necesitan otro useState, ya que se calculan a partir del estado de "Tareas"
    //Podemos calcular directamente con el mismo estado de "Tareas" y no necesitamos almacenarlos en otro estado

    const total = tareas.length;//Numero total de tareas
    //Filtramos unicamente las tareas cuya completada sea true
    //y obtenemos su longitud
    const completadas = tareas.filter(
      (tarea) => tarea.completada
    ).length;

//JSX que renderizará el navegador para mostrar los datos en pantalla

return(
<main>  
  {
    //Enviamos datos al componente encabezado a través de props
  }
  <Encabezado
    titulo="Administrador de Tareas"
    subtitulo="Aplicación creada con React"
    />
{
  //Enviamos una funcion al formulario usando props
  //El formulario podrá llamar a agregar tarea
  //cuando el usuario haga click en el botón de agregar
}
  <FormularioTarea 
    onAgregarTarea={agregarTarea}
  />

  {
    //Enviamos datos al componente lista de tareas
    //tareas = datos
    //onAlternar = funcion
    //onEliminar = funcion
  }
  <ListaTareas
    tareas={tareas}
    onAlternar={alternarTareas}
    onEliminar={eliminarTarea}
  />
  {
    //Mostramos estadisticas 
  }
  <ResumenTareas
    total={total}
    completadas={completadas}
  />

</main>

);
}

//Exportamos el componente para poder usarlo en otros archivos
//como funcion predeterminada
export default App;
