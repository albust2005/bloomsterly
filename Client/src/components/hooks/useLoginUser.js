import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const useLoginUser = (URI) => {
    const [sesionUser, setSesionUser] = useState(null)
    const navigate = useNavigate()
    //funcion para el inicio de sesion del usuario
    const loginUser = async (data) => {
        try {
            const { Username, Password } = data
            console.log("username: ",Username,"password",Password)
            await axios.get(URI, {
                username: Username,
                contrasena: Password,
            })
            console.log('sesion iniciada correctamente')
            setSesionUser(data)            
            navigate('/')
        } catch (error) {
            console.log(error.message)
        }
    }

    console.log(sesionUser)

    return { sesionUser, loginUser }
} 