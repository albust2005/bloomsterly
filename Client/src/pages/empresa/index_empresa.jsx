import { ButtonNav } from "../../components/buttons/buttonNav";
import { TitleAE } from "../../components/titles/titleAE";
import { LateralMenu } from "./lateralMenu";

export function Index_empresa() {
    return (
        <section className="flex">
            <LateralMenu/>
            <div className="w-[70%]">
                <TitleAE title="Empresa" descripcion="Bienvenido @Empresa al aplicativo"/>
            </div>
        </section>
    )
}