import axios from 'axios';
import { useState } from 'react'

export const useCreateUser = (URI) =>{
    const [user, setUser] = useState(null)

    //funcion para el registro del usuario
    const createUser = async (data) => {
        try {
            const { Cedula, Email, Name, Firstlastname, ConfirmPassword, Username } = data
            await axios.post(URI, {
                COD: Cedula,
                email: Email,
                nombre_c: Name,
                primer_apelli: Firstlastname,
                segundo_apelli: '',
                COD_municipios: 2,
                contrasena: ConfirmPassword,
                username: Username
            })
            
            console.log(data);
            setUser(data)

        } catch (error) {
            console.log(error.message)
        }
    };
    return { createUser, user }
}