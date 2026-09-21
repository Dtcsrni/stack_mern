import {useState} from 'react';

//El componente recibe una función onAgregarTarea

function FormularioTarea({ onAgregarTarea }) {
    //Definimos el estado que guarda lo que el usuario escribe en el input
    const [titulo, setTitulo] = useState('');
    //Estado usado para mostrar errores
    const [error, setError] = useState("");

    //Función que se ejecuta cuando el usuario envia 
    //el formulario
    function manejarEnvio(evento) {
        //Evitamos el comportamiento por defecto
        //del formulario que recarga la página
        evento.preventDefault();

        //Limpiamos espacios al inicio y al final
        const tituloLimpio = titulo.trim();
        //Validamos que exista contenido en el input
        if(tituloLimpio.length === 0 || !tituloLimpio) {
            //Mostramos un mensaje de error
            setError("El título de la tarea no puede estar vacío");
            return;
        }
        //Llamamos a la funcion recibida desde App
        onAgregarTarea(tituloLimpio);
        //Despues de agregar correctamente
        //limpiamos el input
        setTitulo("");
        //También limpiamos cualquier mensaje de error que pudiera haber
        setError("");
    }

    return (    
        //Cuando se envia el formulario
        //React ejecuta la función manejarEnvio
        <form onSubmit={manejarEnvio}>
            <input
                type="text"
                //Texto que aparece en el input cuando está vacío
                placeholder="Escribe una tarea"
                //El valor visible del input
                value={titulo}
                //Cada vez que el usuario escribe
                // onChangue se ejecuta
                //Contiene el contenido del input en evento.target.value
                onChange={(evento) => 
                    setTitulo(evento.target.value)}
            />
            <button type="submit">Agregar</button>
                {
                    //Renderizado condicional
                    //Si el error contiene texto, mostramos el parrafo
                    //Si el error está vacío, no renderizamos nada
                    error && (
                        <p className="error">
                        {error}
                        </p>
                    )
                }

        </form>
    );
}

export default FormularioTarea;