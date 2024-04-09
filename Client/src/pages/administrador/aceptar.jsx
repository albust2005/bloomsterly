export const Aceptar = ({ NIT, nombre }) => {
  return (
    <>
      <div className="fixed inset-0 bg-slate-600 bg-opacity-60 backdrop-blur-sm  flex justify-center items-center  text-center z-30">
        <div className=" bg-dark_theme dark:bg-second_color_lt w-[40%] rounded-2xl p-8 flex flex-col items-center  text-center gap-7 text-white ">
          <h1 className=" text-3xl">
            ¿Estás seguro de aceptar esta empresa {nombre}?
          </h1>
          <div className="flex gap-10">
            <button className="bg-admin_card dark:bg-light_theme hover:bg-dark_theme dark:text-second_color_lt px-4 py-1 rounded-lg hover:dark:bg-second_color_lt hover:dark:text-white hover:border hover:border-light_theme">
              Aceptar
            </button>
            <button className="bg-admin_card dark:bg-light_theme hover:bg-dark_theme dark:text-second_color_lt px-4 py-1 rounded-lg hover:dark:bg-second_color_lt hover:dark:text-white hover:border hover:border-light_theme">
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
