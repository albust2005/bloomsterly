import { ButtonNav } from "../../components/buttons/buttonNav";
import { useUserContext } from "../../components/providers/userProvider";
import { TitleAE } from "../../components/titles/titleAE";
import { LateralMenu } from "./templates/lateralMenu";

export function Index_empresa() {
    const { sesionUser } = useUserContext()

    return (
        <>
            <TitleAE title="Empresa" descripcion={`Bienvenida empresa ${sesionUser.Username}`}/>
        </>
    )
}