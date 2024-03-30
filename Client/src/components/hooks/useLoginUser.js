import axios from 'axios'
import { useState } from 'react'

export const useLoginUser = (URI) => {
    const [sesionUser, setSesionUser] = useState(null)

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

        } catch (error) {
            console.log(error)
        }
    }

    return { sesionUser, loginUser }
} 