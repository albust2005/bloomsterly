import { ButtonModal } from "../../components/buttons/buttonModal";
export const ModalUsu = () => {
  return (
    <div className="fixed inset-0 bg-slate-600 bg-opacity-60 backdrop-blur-sm  flex justify-center items-center  text-center z-30">
      <div className=" bg-dark_theme dark:bg-second_color_lt w-[50%] h-[35vh] rounded-2xl p-8 flex flex-col items-center  text-center gap-7 text-white ">
        <h1 className=" text-3xl">Modificación de estado del usuario</h1>
        <h2 className="text-xl">¿Deseas cambiar el estado del usuario?</h2>
        <p>
          Tener en cuenta que esta decisión puede tener repercusiones sin ser
          previamente consultada
        </p>
        <div className="flex gap-10">
          <button className="bg-admin_card dark:bg-light_theme hover:bg-dark_theme dark:text-second_color_lt px-4 py-1 rounded-lg hover:dark:bg-second_color_lt hover:dark:text-white hover:border hover:border-light_theme">
            Cancelar
          </button>
          <button className="bg-admin_card dark:bg-light_theme hover:bg-dark_theme dark:text-second_color_lt px-4 py-1 rounded-lg hover:dark:bg-second_color_lt hover:dark:text-white hover:border hover:border-light_theme">
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}