import { ButtonAdmin } from "../../components/buttons/buttonAdmin";
import { IconUser } from "../../components/templates/iconUser";
export function Menudiag() {
  return (
    <div className="flex flex-col w-[40vh]  rounded-lg bg-admin_card items-center dark:bg-light_theme absolute">
      <IconUser></IconUser>
      <h2 className="text-white text-2xl dark:text-second_color_lt">
        Administrador
      </h2>
      <ButtonAdmin href="cliente">Clientes</ButtonAdmin>
      <ButtonAdmin href="/empresa">Empresas</ButtonAdmin>
      <ButtonAdmin href="/solicitides">Solicitudes</ButtonAdmin>
      <ButtonAdmin href="/administradores">Administradores</ButtonAdmin>
      <ButtonAdmin href="/crearAdmin">Crear Administrador</ButtonAdmin>
    </div>
  );
}