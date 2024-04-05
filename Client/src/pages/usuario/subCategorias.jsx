import { useParams } from "react-router-dom"
//import { useState, useEffect } from "react"
import { FirtsTitle } from "../../components/titles/Title.jsx"
import { NotFound } from "../../components/templates/NotFound.jsx"
import { useSubCategoriaContext } from "../../components/providers/subCategoriaProvider.jsx"
import { useCategoriaContext } from "../../components/providers/categoriaProvider.jsx"
import { SubCategoriaCard } from "../../components/templates/SubCategoriaCard.jsx"

//custom hook que nos devuelve de manera mas organizada el nombre de la categoria
//y las subcategorias filtradas
const useFoundSubCategorias = () =>{
    const { categoria } = useParams()
    
    const categorias = useCategoriaContext()
    const subCategorias = useSubCategoriaContext()

    const currentCategoria = categorias.find(cat => cat.nombre === categoria)
    const currentSubCategorias = subCategorias.filter(sub => sub.idCategoria === currentCategoria.id)

    return { categoria : currentCategoria.nombre , subCategorias : currentSubCategorias }
}

export function SubCategorias() {
    const {categoria, subCategorias} = useFoundSubCategorias()
    //mostramos las empresas por pantalla haciendo mapenado el array que las contiene
    //y renderizamos el componente EmpresaCards que contiene la estructura
    return (
        <section>
            <section className="flex gap-12 flex-col items-center">
                <FirtsTitle
                    title={categoria}
                />
                <section className="flex flex-wrap justify-center w-full ">
                    {/*grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6*/}
                    {
                        subCategorias?.length === 0
                            ? <NotFound razon="subCategorias disponibles" />
                            : subCategorias?.map(({id, idCategoria, nombre, imagen}) => (
                                <SubCategoriaCard
                                    key={id}
                                    id={id} 
                                    idCategoria={idCategoria}
                                    nombre={nombre}
                                    imagen={imagen}
                                />
                            ))
                    }
                </section>

            </section>
        </section>

    )

}