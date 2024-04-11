


export function ServiciosCard({id, nombre, descripcion, valor, img }) {

    console.log(id)
    
    return (
        <article className="flex  p-3 text-white w-full gap-2">
            <div className="bg-purple-700 w-1/3 flex dark:bg-second_color_lt" >
                <img src={img} alt="" />
            </div>
            <div className="flex flex-col font-text font-medium  w-2/3 dark:text-black">
                <div>
                    <h1>{nombre}</h1>
                    <p className="text-xl ">{descripcion}</p>
                    <h2 className="text-lg">{valor}</h2>
                </div>
                <div className="flex justify-end">
                    <button className="text-center  w-1/4 rounded-sm bg-purple-700 border-2 border-transparent
                    hover:bg-transparent hover:border-purple-700
                    
                    dark:bg-second_color_lt dark:text-white dark:hover:bg-transparent dark:hover:text-second_color_lt  
                    dark:border-2 dark:border-transparent dark:hover:border-second_color_lt">Reservar</button>
                </div>
            </div>
        </article>
    )
}