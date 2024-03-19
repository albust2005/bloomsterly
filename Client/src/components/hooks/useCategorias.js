import withCategorias from '../../db/categorias.json'

export const useCategorias = () => {
    const categorias = withCategorias.categorias
    const mappedCategorias = categorias?.map(categoria => ({
        id: categoria.uuid,
        img: categoria.img,
        nombre: categoria.nombre,
        descripcion: categoria.descripcion,
    }))

    return { categorias: mappedCategorias }
}