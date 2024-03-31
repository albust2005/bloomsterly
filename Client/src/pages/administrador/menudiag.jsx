import { ButtonAdmin } from "../../components/buttons/buttonAdmin";
import { IconUser } from "./iconUser";
export function Menudiag() {
  return (
    <div className="flex flex-col w-[40vh]  rounded-lg bg-admin_card items-center dark:bg-light_theme absolute">
      <IconUser></IconUser>
      <h2 className="text-white text-2xl dark:text-second_color_lt">Administrador</h2>
      <ButtonAdmin>Clientes</ButtonAdmin>
      <ButtonAdmin>Empresas</ButtonAdmin>
      <ButtonAdmin>Solicitudes</ButtonAdmin>
      <ButtonAdmin>Administradores</ButtonAdmin>
      <ButtonAdmin>Crear Administrador</ButtonAdmin>
    </div>
  );
}