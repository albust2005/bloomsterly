import { ButtonModal } from "../../components/buttons/buttonModal";
export const ModalSol = ({ estado, cambiarEstado }) => {
  return (
    <>
      {estado && (
        <div className="fixed inset-0 bg-slate-600 bg-opacity-60 backdrop-blur-sm  flex justify-center items-center  text-center z-30">
          <div className=" bg-dark_theme dark:bg-second_color_lt w-[50%]  rounded-2xl p-8 flex flex-col items-center  text-center gap-3 text-white ">
            <h1 className=" text-6xl text-white mb-5">Logistica S.A.S</h1>
            <img
              className="w-[30vh] rounded-2xl"
              src="https://ethic.es/wp-content/uploads/2022/01/image-from-rawpixel-id-2043765-jpeg-1.jpg"
            />
            <p className="">
              Prestamos todo menos plata, prestamos todo menos plata{" "}
            </p>
            <p>Dirección: 000000</p>
            <p>Télefono: 00000000</p>
            <p>Instagram: 00000000</p>
            <p>Facebook: 00000000</p>
            <p>Municipio: 00000000</p>
            <div className="flex gap-10">
              <ButtonModal>Denegar</ButtonModal>
              <ButtonModal>Aceptar</ButtonModal>
              <button
                className="bg-admin_card dark:bg-light_theme hover:bg-dark_theme dark:text-second_color_lt px-4 py-1 rounded-lg hover:dark:bg-second_color_lt hover:dark:text-white hover:border hover:border-light_theme"
                onClick={() => {
                  cambiarEstado(false);
                }}
              >
                Cancelar
              </button>
              {/* <ButtonModal
                onClick={() => {
                  {console.log("Dí click")}
                  cambiarEstado(false);
                }}
              >
                cancelar
              </ButtonModal> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

