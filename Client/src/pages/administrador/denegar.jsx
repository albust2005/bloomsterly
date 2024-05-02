import { useToastify } from "../../components/hooks/useToastify";
import axios from 'axios'
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
export const Denegar = ({ NIT, nombre, cambiarEstado, email}) => {

  const currentNit = NIT
  const { showToastMessage } = useToastify()

  const denegarEmpresa = async () => {
    try {
      const respuesta = await axios.post("http://localhost:8000/admin/negar", {
        NIT: currentNit
      })

      const mensaje = respuesta.data.message
      showToastMessage(mensaje)

    } catch (error) {
      if (error.response) {
        showToastMessage(error.response.data.message)
      } else if (error.request) {
        // La solicitud fue realizada pero no se recibió respuesta
        console.error("No se recibió respuesta del servidor");
      } else {
        showToastMessage(error.message)
      }
    }
  }

const correo = () => {
    const template = {
      nombre: nombre,
      email: email,
    };
  emailjs
    .send("service_el9wigr", "template_j3od3on", template, "bbqmhiDbRK7hYsLPc")
    .then(
      (response) => {
        console.log("Correo electrónico enviado con éxito!", response);
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
};
  const denegar = ()=>{
    denegarEmpresa()
    correo()
  }
  return (
    <>
      <div className="fixed inset-0 bg-slate-600 bg-opacity-60 backdrop-blur-sm  flex justify-center items-center  text-center z-30">
        <div className=" bg-dark_theme dark:bg-second_color_lt w-[40%] rounded-2xl p-8 flex flex-col items-center  text-center gap-7 text-white ">
          <h1 className=" text-3xl">
            ¿Estás seguro de rechazar esta empresa {nombre}?
          </h1>
          <div className="flex gap-10">
            <button 
            onClick={denegar}
            className="bg-admin_card dark:bg-light_theme hover:bg-dark_theme dark:text-second_color_lt px-4 py-1 rounded-lg hover:dark:bg-second_color_lt hover:dark:text-white hover:border hover:border-light_theme">
              Aceptar
            </button>
            <button
              className="bg-admin_card dark:bg-light_theme hover:bg-dark_theme dark:text-second_color_lt px-4 py-1 rounded-lg hover:dark:bg-second_color_lt hover:dark:text-white hover:border hover:border-light_theme"
              onClick={() => {
                cambiarEstado(false);
              }}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}