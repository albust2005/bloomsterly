import withEmpresas from '../../db/empresas.json'

export const useEmpresas = () => {
    const empresas = withEmpresas.empresas
    const mappedEmpresas = empresas?.map(empresa => ({
        id: empresa.NIT,
        nombre: empresa.nombre,
        logo: empresa.logo,
        descripcion: empresa.descripcion,
        direccion: empresa.direccion,
        telefono: empresa.telefono,
        imagenes: empresa.imagenes,
        instagram: empresa.imagenes,
        facebook: empresa.facebook,
        email: empresa.email,
    }))

    return { empresas: mappedEmpresas}

}