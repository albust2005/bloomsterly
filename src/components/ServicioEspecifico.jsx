import { useParams } from "react-router-dom"

export function ServicioEspecifico (){
    const { name } = useParams()
    
    return (
        <h1>{name}</h1>
    )
    
}