import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useToastify } from './useToastify'


export const updateToken = token => {
    console.log(token)
    localStorage.setItem('token', token)
}

export const useLoginUser = (URI) => {
    const [sesionUser, setSesionUser] = useState(() => {
        const user = localStorage.getItem('user')
        return user ? JSON.parse(user) : null
    })

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(sesionUser))
    }, [sesionUser])


    const navigate = useNavigate()
    const location = useLocation()
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

                const token = respuesta.data.token

                updateToken(token)
                showToastMessage(`Bienvenido de nuevo ${Username}`)
                setSesionUser(data)

                navigate(!!location.state ? location.state.location.pathname : '/')
            } else {
                if (Rol == "Administrador") {
                    const respuesta = await axios.post("http://localhost:8000/login/admin/", {
                        username: Username,
                        contrasena: Password
                    })

                    const token = respuesta.data.token

                    updateToken(token)
                    showToastMessage(`Bienvenido administrador ${Username}`)
                    setSesionUser(data)
                    navigate('/administrador')

                } else if (Rol == 'Empresa') {
                    const respuesta = await axios.post("http://localhost:8000/login/empresa/", {
                        username: Username,
                        contrasena: Password
                    })

                    const token = respuesta.data.token

                    updateToken(token)

                    showToastMessage(`Bienvenida empresa ${Username}`)
                    setSesionUser(data)
                    navigate('/empresa')
                }
            }

        } catch (error) {
            if (error.response) {
                showToastMessage("Revisa tu usuario o contraseña")
            } else if (error.request) {
                // La solicitud fue realizada pero no se recibió respuesta
                console.error('No se recibió respuesta del servidor');
            } else {
                showToastMessage(error.message)
            }
        }
    }

    const logout = () => {
        localStorage.removeItem('user')
        
        showToastMessage(`¡Vuelve pronto ${sesionUser?.Username}!`)
        setSesionUser(null)
        navigate('/')
    }

    const logout1 = () => {
        localStorage.removeItem("user");
        setSesionUser(null);
        navigate("/");
    };

    return { sesionUser, loginUser, logout, logout1 }

} 