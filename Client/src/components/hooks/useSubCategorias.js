import withSubCategorias from '../../db/subCategorias.json'

export const useSubCategorias = () =>{
    const subCategorias = withSubCategorias.subCategorias
    const mappedSubCategorias = subCategorias?.map(subCategoria =>({
        id: subCategoria.id,
        idCategoria: subCategoria.idCategoria,
        nombre: subCategoria.nombre,
        imagen: subCategoria.imagen
    }))

    return { subCategorias: mappedSubCategorias }
}