function ServicioCardReserva () {
    return (
        <article>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <h2>Nombre empresa</h2>
                <h1>Nombre servicio</h1>
            </div>
            <div>
                <button>eliminar</button>
            </div>
        </article>
    )
}


export function ReservaActual () {
    return(
        <section>
            <div>
                <h1>Reserva</h1>
            </div>
            <article className="bg-color_switch_theme_dark">
                <div>
                    <p>Nombre del evento:</p>
                    <p>Cliente:</p>
                    <p>Direccion:</p>
                    <p>Fecha:</p>
                    <p>Telefono:</p>
                    <p>Servicios:</p>
                </div>
                <div className="bg-white">
                    
                </div>
            </article>
        </section>
    )
}