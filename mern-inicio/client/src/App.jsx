import "./App.css";

function App(){
  const materia = "Diseño y Desarrollo de Apps Web";
  const parcial = 3;
  return (
    <main>
      <h1>Gestor de tareas </h1>
      <p>Aplicacion en React</p>
      <p>Materia: {materia}</p>
      <p>Parcial: {parcial}</p>
      <p>4x5 = {4 * 5}</p>

    </main>
  );
}

export default App;