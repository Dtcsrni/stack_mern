import { useState } from "react";

function FormularioTarea({ onAgregarTarea }) {
  const [titulo, setTitulo] = useState("");
  const [error, setError] = useState("");

  function manejarEnvio(evento) {
    evento.preventDefault();

    const tituloLimpio = titulo.trim();

    if (tituloLimpio.length === 0) {
      setError("El título de la tarea no puede estar vacío");
      return;
    }

    onAgregarTarea(tituloLimpio);
    setTitulo("");
    setError("");
  }

  return (
    <form onSubmit={manejarEnvio}>
      <input
        type="text"
        placeholder="Escribe una tarea"
        value={titulo}
        onChange={(evento) => setTitulo(evento.target.value)}
      />
      <button type="submit">Agregar</button>

      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default FormularioTarea;