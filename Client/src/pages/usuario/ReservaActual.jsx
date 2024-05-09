import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import {
  useReservaUserContext,
  useReservaUserCrudContext,
} from "../../components/providers/reservasUserProvider";
import { useEmpresaContext } from "../../components/providers/empresaProvider";
import { useUserContext } from "../../components/providers/userProvider";
import { useThemeContext } from "../../components/providers/themeProvider";
import { useState } from "react";

{
  /*agregar el servicio  */
}
function AgregarServiciosReserva() {
  const theme = useThemeContext();
  const logoColor = theme === "dark" ? "#BC0B38" : "#fff";

  return (
    <div
      className="bg-color_switch_theme_dark w-1/5 min-h-48 flex justify-center items-center 
    rounded-sm dark:bg-[#FFFFDD]"
    >
      <Link to="/categorias">
        <FontAwesomeIcon
          icon={faCirclePlus}
          size="2x"
          style={{ color: logoColor }}
        />
      </Link>
    </div>
  );
}

/*renderiza el servicio seleccionado */
function ServicioCardReserva({
  empresa,
  nombre,
  valor,
  removeServicioSeleccionado,
}) {
  return (
    <article className="bg-color_switch_theme_dark w-full max-w-full h-full p-2 rounded-sm mx-auto
    dark:bg-[#FFFFDD] dark:text-second_color_lt">
      <div className="flex flex-col gap-1">
        <h2 className="font-title text-xl font-semibold"> {empresa}</h2>
        <h2 className="font-title font-semibold">Nombre servicio:</h2>
        <h2 className="font-text"> {nombre}</h2>
        <h2 className="font-title font-semibold">Valor:</h2>
        <p>{valor}</p>

        <div className="flex flex-row-reverse items-center mt-auto">
          <button
            type="button"
            onClick={removeServicioSeleccionado}
            className="bg-dark_theme px-2 rounded-sm dark:bg-second_color_lt dark:text-light_theme "
          >
            Eliminar
          </button>
        </div>
      </div>
    </article>
  );
}

export function ReservaActual() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    //watch
  } = useForm();

  const [servicioSeleccionadoNombre, setServicioSeleccionadoNombre] = useState(
    []
  );
  const { servicioSeleccionados } = useReservaUserContext();
  const { removeServicioSeleccionado, createReserva } =
    useReservaUserCrudContext();

  const { empresas } = useEmpresaContext();
  //const eventoValue = watch('evento')

  useState(() => {
    const servicioNombre = servicioSeleccionados?.find(
      (servicio) => servicio.id
    )?.id;
    setServicioSeleccionadoNombre([
      ...servicioSeleccionadoNombre,
      servicioNombre,
    ]);
  }, [servicioSeleccionados]);

  const onSubmit = (data) => {
    data.servicios = servicioSeleccionadoNombre;
    createReserva(data);
    setServicioSeleccionadoNombre([]);
  };

  const { sesionUser } = useUserContext();

  return (
    <section className=" bg-dark_theme dark:bg-second_color_lt p-9 flex flex-col gap-4 z-20">
      <div>
        <h1 className="font-bloomsterly text-8xl text-center text-white">
          Reserva
        </h1>
      </div>

      <div className="flex justify-center items-center ">
        <form
          action=""
          id="my-form"
          onSubmit={handleSubmit(onSubmit)}
          className=" w-[90%] text-white flex flex-col gap-5"
        >
          <div className="flex minicel:flex-col sm:flex-row">
            <div className="flex justify-start items-center w-1/3 minicel:w-full sm:w-1/3">
              <label
                htmlFor="cliente"
                {...register("cliente")}
                className="font-title font-semibold text-xl "
              >
                Cliente: {sesionUser?.Username}
              </label>
            </div>

            <div className="flex flex-col w-2/3 minicel:w-full sm:w-2/3 ">
              <label
                htmlFor="evento"
                className="font-title font-semibold text-xl"
              >
                Nombre del evento
              </label>
              <input
                type="text"
                {...register("evento", {
                  required: {
                    value: true,
                    message: "Escribe un nombre para tu evento",
                  },
                })}
                className="focus:outline-none bg-transparent border-b-2 border-white text-base font-text"
              />
              {errors.evento && (
                <span className="text-sm">{errors.evento.message}</span>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="direccion"
              className="font-title font-semibold text-xl"
            >
              Dirección{" "}
            </label>
            <input
              type="text"
              {...register("direccion", {
                required: {
                  value: true,
                  message: "Escribe la dirección del evento",
                },
              })}
              className="focus:outline-none bg-transparent border-b-2 border-white text-base font-text"
            />
            {errors.direccion && (
              <span className="text-sm">{errors.direccion.message}</span>
            )}
          </div>

          <div className="flex gap-5 minicel:flex-col sm:flex-row">
            <div className="flex flex-col w-1/2 minicel:w-full sm:w-1/2">
              <label
                htmlFor="fecha"
                className="font-title font-semibold text-xl"
              >
                Fecha
              </label>
              <input
                type="date"
                {...register("fecha", {
                  required: {
                    value: true,
                    message: "Es obligatoria la fecha",
                  },
                  // validate: (value) => {
                  //     const selectedDate = new Date(value); // Convertir el valor del campo a un objeto Date
                  //     const currentDate = new Date();

                  // }
                })}
                className="focus:outline-none bg-transparent border-b-2 border-white text-base font-text"
              />
              {errors.fecha && (
                <span className="text-sm">{errors.fecha.message}</span>
              )}
            </div>

            <div className="flex flex-col w-1/2 minicel:w-full sm:w-1/2">
              <label
                htmlFor="telefono"
                className="font-title font-semibold text-xl"
              >
                Teléfono:
              </label>
              <input
                type="tel"
                {...register("telefono", {
                  required: {
                    value: true,
                    message: "Debes poner tu teléfono",
                  },
                })}
                className="focus:outline-none bg-transparent border-b-2 border-white text-base font-text"
              />
              {errors.telefono && (
                <span className="text-sm">{errors.telefono.message}</span>
              )}
            </div>
          </div>

          <div className="">
            <label
              htmlFor="servicios"
              className="font-title font-semibold text-xl"
            >
              Servicios
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 w-full">
              {servicioSeleccionados?.map(servicio => (

                <ServicioCardReserva
                  key={servicio.id}
                  empresa={
                    empresas.find((em) => em.id == servicio.idEmpresa)?.nombre
                  }
                  nombre={servicio.nombre}
                  valor={servicio.valor}
                  removeServicioSeleccionado={() =>
                    removeServicioSeleccionado(servicio)
                  }
                />
              ))}
              <AgregarServiciosReserva />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-transparent border-2 border-[#451693] rounded-sm 
             hover:bg-[#451693] font-title p-1 transition-all ease-in-out
             dark:border-light_theme dark:hover:text-second_color_lt dark:hover:bg-light_theme"
            >
              Confirmar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
