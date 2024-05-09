import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { useToastify } from '../hooks/useToastify'

export const useCreateEmpresa = () => {
    const navigate = useNavigate()
    const { showToastMessage } = useToastify()

    const createEmpresa = async (data) => {
        console.log(data)
        try {
            const { Nit, Nombreempresa, descripcion, municipio, Instagram, Facebook, Password, direccion, telefono, email, imagen } = data
            const formData = new FormData();
            formData.append('NIT', Nit)
            formData.append('nombre', Nombreempresa)
            formData.append('descripcion', descripcion)
            formData.append('COD_municipios', municipio)
            formData.append('instagram',Instagram)
            formData.append('facebook', Facebook)
            formData.append('contrasena',Password)
            formData.append('username', Nombreempresa)
            formData.append('direccion',direccion)
            formData.append('telefono', telefono)
            formData.append('email',email)
            formData.append('imagen', imagen)

            const respuesta = await axios.post("http://localhost:8000/registerempresa/", formData)

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