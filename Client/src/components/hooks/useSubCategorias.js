import axios from 'axios'
//import withSubCategorias from '../../db/subCategorias.json'
import { useEffect, useState } from 'react'

export const useSubCategorias = () =>{
    const [subCategorias,setSubCategoria]=useState([])

    const obtenerSubCategoria = async()=>{
        try {
            const respuesta = await axios.get("http://localhost:8000/user/subcategorias")
            setSubCategoria(respuesta.data)   
        } catch (error) {
            alert(error.response.message) 
        }
    }

    useEffect(()=>{
        obtenerSubCategoria()
    },[])

    const mappedSubCategorias = subCategorias?.map(subCategoria =>({
        id: subCategoria.COD,
        idCategoria: subCategoria.categoria,
        nombre: subCategoria.nombre,
        imagen: subCategoria.imagen
    }))

    return { subCategorias: mappedSubCategorias }
}