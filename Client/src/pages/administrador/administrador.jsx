import { Layaout } from "../../components/templates/Layaout";
import { FirtsTitle, Titles } from "../../components/titles/Title";
import { Menuprincipal } from "./Menuprincipal";
import { Menudiag } from "./menudiag";
export function Administrador({ user="Silvana" }) {
  return (
    <>
      <Menuprincipal />
      <Menudiag></Menudiag>
    </>
  );
}
