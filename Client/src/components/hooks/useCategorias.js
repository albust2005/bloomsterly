import { useEffect, useState } from 'react'
import axios from 'axios'

export const useCategorias = () => {
    const [categorias, setcategorias]=useState([])
    useEffect(()=>{
        obtenerCategorias()
    },[])
    // const token = localStorage.getItem("token")
    const obtenerCategorias=async()=>{
        try {
            const respuesta = await axios.get("http://localhost:8000/user/categorias")
            setcategorias(respuesta.data)
        } catch (error) {
            alert(error)
        }
    }
    // const categorias = withCategorias.categorias
    const mappedCategorias = categorias?.map(categoria => ({
        id: categoria.uuid,
        img: categoria.image,
        nombre: categoria.nombre,
        descripcion: categoria.descripcion,
    }))

    return { categorias: mappedCategorias, obtenerCategorias }
}