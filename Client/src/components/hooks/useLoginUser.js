import axios from 'axios'
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useToastify } from './useToastify'

export const useLoginUser = (URI) => {
    const [sesionUser, setSesionUser] = useState(null)
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location?.state?.location.pathname)
    
    const { showToastMessage } = useToastify()

    //funcion para el inicio de sesion del usuario
    const loginUser = async (data) => {
        try {
            const { Username, Password, Rol } = data
            console.log(URI)

            if (Rol == "Cliente") {
                const respuesta = await axios.post(URI, {
                    username: Username,
                    contrasena: Password
                })
                
                showToastMessage(`Bienvenido de nuevo ${Username}`)
                setSesionUser(data)
                navigate(!!location.state ? location.state.location.pathname : '/')
            } else {
                if (Rol == "Administrador") {
                    const respuesta = await axios.post("http://localhost:8000/login/admin/", {
                        username: Username,
                        contrasena: Password
                    })
                    console.log('Sesion iniciada correctamente Administrador')
                    alert(respuesta.data.message)
                    setSesionUser(data)
                    navigate('/administrador')
                }
            }



        } catch (error) {
            if (error.response) {
                showToastMessage(error.response.data.message)
            } else if (error.request) {
                // La solicitud fue realizada pero no se recibió respuesta
                console.error('No se recibió respuesta del servidor');
            } else {
                alert(error.message)
            }
        }
    }

    const logout = () => {
        setSesionUser(null)
        navigate('/')
    }

    return { sesionUser, loginUser, logout }

} 