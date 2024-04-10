import { useEffect, useState } from 'react'
import axios from 'axios'
import withEmpresas from '../../db/empresas.json'

export const useEmpresas = () => {
    const [ empresas, setEmpresas ] = useState([])
    console.log(empresas)


    const obtenerEmpresas = async() =>{
        try {
            const response = await axios.get('http://localhost:8000/user/getAllEmpresas')
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
        logo: empresa.logo,
        descripcion: empresa.descripcion,
        direccion: empresa.direccion,
        telefono: empresa.telefono,
        imagenes: empresa.imagenes,
        instagram: empresa.instagram,
        facebook: empresa.facebook,
        email: empresa.email,
    }))

    return { empresas: mappedEmpresas}

}