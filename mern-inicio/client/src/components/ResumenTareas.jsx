//Recibimos dos props, total y completadas, y mostramos un resumen de las tareas
function Resumen({ total, completadas }) {
    //Calculamos los pendientes
    const pendientes = total - completadas;
    return (
        <section className="resumen">
            <span>Total de tareas: {total}</span>
            <span>Tareas completadas: {completadas}</span>
            <span>Tareas pendientes: {pendientes}</span>
        </section>
    );
}
export default Resumen;
        