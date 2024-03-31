export const Solicitud = ({}) => {
  return (
    <div>
      <h1 className="text-white text-7xl mb-2 dark:text-second_color_lt">
        Solicitudes de Ingreso
      </h1>
      <div className=" bg-admin_card w-[100vh] p-4 rounded-lg m-5 dark:bg-light_theme cursor-pointer">
        <div className="flex">
          <div>
            <img
              className="w-[18vh] rounded-lg"
              src="https://img.europapress.es/fotoweb/fotonoticia_20191003082941_1200.jpg"
            />
          </div>
          <div className="ml-5 items-center">
            <h1 className=" text-2xl text-white dark:text-second_color_lt">
              Logística S.A.S
            </h1>
            <p className=" text-white dark:text-second_color_lt">
              Prestamos mañana hoy no, prestamos mañana hoy no
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
