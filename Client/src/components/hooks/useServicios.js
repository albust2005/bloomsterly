import { useEffect, useState } from 'react'
// import withServicios from '../../db/servicios.json'
import axios from 'axios'

export const useServicios = () => {
    const [servicios, setServicios] = useState([])
    const token = localStorage.getItem('token')


    const obtenerServicios = async () => {
        try {
            const response = await axios.get('http://localhost:8000/user/servicios', {
                headers: {
                    Authorization: token
                } 
            })
            setServicios(response.data)
        } catch (error) {
            console.log(error.response.message)
        }
    }

    useEffect(() => {
        obtenerServicios()
    }, [])

    const mappedServicios = servicios?.map(servicio => ({
        id: servicio.ID,
        nombre: servicio.nombre,
        descripcion: servicio.descripcion,
        valor: servicio.valor_servicio,
        idEmpresa: servicio.NIT_empresas,
        idSubCategoria: servicio.COD_categorias
    }))

    return { servicios: mappedServicios }
}