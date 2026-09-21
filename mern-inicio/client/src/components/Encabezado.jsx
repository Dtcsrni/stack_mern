function Encabezado({ titulo, subtitulo, Tareas}) {
    return (
        <header>
            <h1>{titulo}</h1>
            <p>{subtitulo}</p>
            <p>{Tareas}</p>
        </header>
    );
}

export default Encabezado;