import axios from 'axios';
import { useState } from 'react'

export const useCreateUser = (URI) =>{
    const [user, setUser] = useState(null)

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
            const r=respuesta.data.message
            alert(r)
            console.log(data);
            setUser(data)

        } catch (error) {
            console.log(error.message)
        }
    };
    return { createUser, user }
}