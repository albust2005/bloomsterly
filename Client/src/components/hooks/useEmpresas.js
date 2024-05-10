import { useEffect, useState } from 'react'
import axios from 'axios'

export const useEmpresas = () => {
    const [ empresas, setEmpresas ] = useState([])
    console.log(empresas)
    const token = localStorage.getItem('token')

    const obtenerEmpresas = async() =>{
        try {
            const response = await axios.get('http://localhost:8000/user/getAllEmpresas',{
                headers: {
                    Authorization: token
                }
            })
            setEmpresas(response.data)
        } catch (error) {
            console.log(error.response.message)
        }
    }

    useEffect(()=>{
        obtenerEmpresas()
    },[])

    const mappedEmpresas = empresas?.map(empresa => ({
        id: empresa.NIT,
        nombre: empresa.nombre,
        logo: empresa.image,
        descripcion: empresa.descripcion,
        direccion: empresa.direccion,
        telefono: empresa.telefono,
        imagenes: empresa.imagenes,
        instagram: empresa.instagram,
        facebook: empresa.facebook,
        username: empresa.username,
        email: empresa.email,
    }))

    return { empresas: mappedEmpresas, obtenerEmpresas}

}