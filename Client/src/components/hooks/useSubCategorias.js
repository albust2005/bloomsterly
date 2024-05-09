import axios from 'axios'
//import withSubCategorias from '../../db/subCategorias.json'
import { useEffect, useState } from 'react'

export const useSubCategorias = () => {
    const [subCategorias, setSubCategoria] = useState([])

    const token = localStorage.getItem("token")
 
    const obtenerSubCategoria = async () => {
        try {
            const respuesta = await axios.get("http://localhost:8000/user/subcategorias", {
                headers: {
                    Authorization: token
                }
            })
            setSubCategoria(respuesta.data)

        } catch (error) {
            alert(error.message)

        }
    }

    useEffect(() => {
      obtenerSubCategoria()
    }, [])

    const mappedSubCategorias = subCategorias?.map(subCategoria => ({
        id: subCategoria.COD,
        idCategoria: subCategoria.uuid_categoria,
        nombre: subCategoria.nombre,
        imagen: subCategoria.image
    }))

    return { subCategorias: mappedSubCategorias, obtenerSubCategoria }
}