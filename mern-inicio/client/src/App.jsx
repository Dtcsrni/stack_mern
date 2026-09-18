import {useState} from "react";
import "./App.css";
import Encabezado from "./components/Encabezado.jsx";

function App(){
  const [contador, setContador] = useState(0);
  return (
  <main>
    <Encabezado 
    titulo="Gestor de Tareas de septiembre CUH"
    subtitulo="Aplicacion desarrollada en CUH con React en septiembre"
    />
    <p>Contador: {contador}</p>
    <button onClick={() => setContador(contador + 1)}>Incrementar</button>
  </main>
  );
}

export default App;