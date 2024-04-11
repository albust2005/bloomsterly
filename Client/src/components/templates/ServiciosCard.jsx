


export function ServiciosCard({id, nombre, descripcion, valor, img }) {

    console.log(id)
    
    return (
        <article className="flex flex-col p-3 text-white w-full bg-red-300">
            <div className="bg-slate-600 w-1/3 flex " >
                <img src={img} alt="" />
            </div>
            <div className="flex flex-col font-text font-medium bg-black w-2/3 ">
                <div>
                    <h1>{nombre}</h1>
                    <p className="text-xl ">{descripcion}</p>
                    <h2 className="text-lg">{valor}</h2>
                </div>
                <div className="flex justify-end">
                    <button className="text-center  w-1/4 border-2">Reservar</button>
                </div>
            </div>
        </article>
    )
}