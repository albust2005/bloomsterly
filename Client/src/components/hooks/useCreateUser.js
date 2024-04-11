import axios from 'axios';
import { useState } from 'react'
import { useToastify } from './useToastify'

export const useCreateUser = (URI) =>{
    const [user, setUser] = useState(null)

    const { showToastMessage } = useToastify()

    //funcion para el registro del usuario
    const createUser = async (data) => {
        try {
            const { Cedula, Email, Name, Firstlastname, ConfirmPassword, Town, Username } = data
            const respuesta= await axios.post(URI, {
                COD: Cedula,
                email: Email,
                nombre_c: Name,
                primer_apelli: Firstlastname,
                COD_municipios: Town,
                contrasena: ConfirmPassword,
                username: Username
            })
            showToastMessage(`Bienvenido a BloomSterly ${Username}`)
            console.log(data);
            setUser(data)

        } catch (error) {
            console.log(error.message)
            showToastMessage(`Revisa tus datos`)
        }
    };
    return { createUser, user }
}