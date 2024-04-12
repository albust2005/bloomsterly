import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { useToastify } from '../hooks/useToastify'

export const useCreateEmpresa = () => {
    const navigate = useNavigate()
    const { showToastMessage } = useToastify()

    const createEmpresa = async (data) => {
        console.log(data)
        try {
            const { Nit, Nombreempresa, descripcion, municipio, Instagram, Facebook, Password, direccion, telefono, email } = data
            const respuesta = await axios.post("http://localhost:8000/registerempresa/", {
                NIT: Nit,
                nombre: Nombreempresa,
                descripcion: descripcion,
                COD_municipios: municipio,
                instagram: Instagram,
                facebook: Facebook,
                contrasena: Password,
                username: Nombreempresa,
                direccion: direccion,
                telefono: telefono,
                email: email
            })

            showToastMessage('Solicitud enviada correctamente')
            showToastMessage('La respuesta le sera enviada al correo electronico registrado')

            navigate('/')

            console.log(respuesta);

        } catch (error) {
            console.log(error.message)
            showToastMessage(error.message)
        }
    };

    return { createEmpresa }
}