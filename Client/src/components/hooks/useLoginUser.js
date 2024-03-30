import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const useLoginUser = (URI) => {
    const [sesionUser, setSesionUser] = useState(null)
    const navigate = useNavigate()
    //funcion para el inicio de sesion del usuario
    const loginUser = async (data) => {
        try {
            const { Username, Password, Rol } = data
            console.log(URI)
            if (Rol == "Cliente"){
                const respuesta = await axios.post(URI, {
                    username:Username,
                    contrasena:Password
                })
                console.log('sesion iniciada correctamente usuario')
                alert(respuesta.data.message)
                alert(respuesta.data.estado)
                setSesionUser(data)            
                navigate('/')
            }else{
                if(Rol == "Administrador"){
                    const respuesta = await axios.post("http://localhost:8000/login/admin/", {
                        username:Username,
                        contrasena:Password
                    })
                    console.log('sesion iniciada correctamente Administrador')
                    alert(respuesta.data.message)
                    setSesionUser(data)            
                    navigate('/') 
                }
            }
        } catch (error) {
            if(error.response){
                    alert(error.response.data.message)
                
            }else if (error.request) {
                // La solicitud fue realizada pero no se recibió respuesta
                console.error('No se recibió respuesta del servidor');
            }else{
                alert(error.message)
            }
        }
    }

    console.log(sesionUser)

    return { sesionUser, loginUser }
} 