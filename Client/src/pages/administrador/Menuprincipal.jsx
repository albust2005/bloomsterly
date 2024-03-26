import { ButtonNav } from "../../components/buttons/buttonNav";
export const Menuprincipal = () => {
  return (
    <nav className="bg-transparent flex justify-between items-center h-20 dark:bg-transparent dark:shadow-[#f7e6d5]">
      <h1 className="cursor-pointer text-white dark:text-red-500">Bloomsterly</h1>
      <ButtonNav text="Cerrar Sesión"/>
    </nav>
  );
};
