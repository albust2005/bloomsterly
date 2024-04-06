export function ServiciosCard({id, nombre, descripcion, valor, img }) {

    console.log(id)
    
    return (
        <article className="flex flex-col p-3 bg-white">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="flex flex-col">
                <div>
                    <h1>{nombre}</h1>
                    <p>{descripcion}</p>
                    <h2>{valor}</h2>
                </div>
                <div>
                    <button>reservar</button>
                </div>
            </div>
        </article>
    )
}