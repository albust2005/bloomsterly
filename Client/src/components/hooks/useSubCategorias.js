import axios from 'axios'
import withSubCategorias from '../../db/subCategorias.json'
import { useEffect, useState } from 'react'

export const useSubCategorias = () =>{
    const [subCategorias,setsubCategoria]=useState([])
    const obtener= async()=>{
        try {
            const respuesta=await axios.get("http://localhost:8000/user/subcategorias")
            setsubCategoria(respuesta.data)   
        } catch (error) {
            alert(error.response.message)
        }
    }
    useEffect(()=>{
        obtener()
    },[])
    const mappedSubCategorias = subCategorias?.map(subCategoria =>({
        id: subCategoria.COD,
        idCategoria: subCategoria.categoria,
        nombre: subCategoria.nombre,
        imagen: subCategoria.imagen
    }))

    return { subCategorias: mappedSubCategorias }
}