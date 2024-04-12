import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { useToastify } from './useToastify'
import { useChangeLogin } from '../../pages/Login';

export const useCreateUser = (URI) => {
    const { Inicios } = useChangeLogin()

    const { showToastMessage } = useToastify()
    const navigate = useNavigate()

    //funcion para el registro del usuario
    const createUser = async (data) => {
        try {
            const { Cedula, Email, Name, Firstlastname, ConfirmPassword, Town, Username } = data
            const respuesta = await axios.post(URI, {
                COD: Cedula,
                email: Email,
                nombre_c: Name,
                primer_apelli: Firstlastname,
                COD_municipios: Town,
                contrasena: ConfirmPassword,
                username: Username
            })
            showToastMessage(`Inicia sesion`)
            console.log(data);
            Inicios()

        } catch (error) {
            console.log(error.message)
            showToastMessage(`Revisa tus datos`)
        }
    };
    return { createUser }
}