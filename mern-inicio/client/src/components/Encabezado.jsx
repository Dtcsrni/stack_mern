//Importamos la imagen desde la carpeta de recursos
import hero from "../assets/hero.jpg";

//Componente que recibe dos propiedades
//titulo, y subtitulo
function Encabezado({ titulo, subtitulo }) {
  return (
    <header className="encabezado">
      <div className="hero-contenedor">
        <img src={hero} alt="Imagen de encabezado" className="hero-banner" />
      </div>
      <div className="encabezado-texto">
        <h1>{titulo}</h1>
        <p>{subtitulo}</p>
      </div>
      {
        //src recibe el recurso URL de la imagen importada
        //La propiedad alt proporciona una descripción alternativa de la imagen para mejorar la accesibilidad y SEO
      }
    </header>
  );
}

export default Encabezado;
