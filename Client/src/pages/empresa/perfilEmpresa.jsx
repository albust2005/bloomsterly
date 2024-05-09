import { ButtonAdmin } from "../../components/buttons/buttonAdmin";
import { IconUser } from "../administrador/templates/iconUser";
// import { ServiciosReserva } from "./templates/serviciosReserva";
import { useUserContext } from "../../components/providers/userProvider";
import { EliminarAdmin } from "../administrador/eliminarAdmin";
import { useEffect, useState } from "react";
import axios from "axios";
export function PerfilEmpresa() {
  const [cambiar, setCambiar] = useState(false);
  const [dato, setdato] = useState([])
  const [dato1, setdato1] = useState([])
  const [dato2, setdato2] = useState([])
  const eliminar = () => {
    setCambiar(!cambiar); 
  };
  const { sesionUser } = useUserContext();

  const obtenerUser=async()=>{
    try {
      const respuesta = await axios.get("http://localhost:8000/user/getusuario",{
        headers:{
          Authorization:token
        }
      })
      setdato2(respuesta.data)
    } catch (error) {
      alert(error)
      console.log(error)
    }
  }
  
  const obtenerEmpresa=async()=>{
    try {
      const respuesta = await axios.get("http://localhost:8000/empresa/getempresa",{
        headers:{
          Authorization:token
        }
      })
      setdato1(respuesta.data)
    } catch (error) {
      alert(error)
    }
  }

  const token=localStorage.getItem("token")
  useEffect(()=>{
    if (sesionUser?.Rol === "Administrador"){
      obtenerAdmin()
    }
    if (sesionUser?.Rol === "Empresa") {
      obtenerEmpresa()
    }
    if (sesionUser?.Rol === "Cliente") {
      obtenerUser()
    }
  },[])

  const obtenerAdmin=async()=>{
    try {
      const respuesta = await axios.get("http://localhost:8000/admin/getadmin",{
        headers:{
          Authorization:token
        }
      })
      setdato(respuesta.data)
    } catch (error) {
      alert(error)
    }
  }


  return (
    <>
      <section className="flex  w-full justify-center gap-4 z-10">
        <div className="flex w-full">
          <div
            className="w-full flex flex-col justify-center items-center font-title font-bold 
          bg-hover_boton_admin dark:bg-light_theme"
          >
            {dato1.image ? <img src={dato1.image ? `http://localhost:8000/empresa/getempresa/${dato1.image}` : ""} alt="imagen" width={100} height={100} style={{borderRadius:12}}></img>  : <IconUser clasName="h-20" />}
            {sesionUser?.Rol === "Administrador" ? (
              <h2 className="text-white dark:text-second_color_lt celular:text-[20px] sm:text-[30px] lg:text-4xl">
                {dato.nombre}
              </h2>
            ) : (sesionUser?.Rol === "Empresa" ? (
              <>
              <h2 className="text-white text-4xl dark:text-second_color_lt celular:text-[20px] sm:text-[30px] lg:text-4xl">
                {dato1.nombre}
              </h2>
              </>
            ): (
              <>
              <h2 className="text-white text-4xl dark:text-second_color_lt celular:text-[20px] sm:text-[30px] lg:text-4xl">
                {dato2.nombre_c}
              </h2>
              </>
            ))}
          </div>
          <div className="w-[100%] bg-[#190042] rounded-sm p-5 font-title text-white dark:bg-second_color_lt">
            {sesionUser?.Rol === "Administrador" ? (
              <>
                <p className="font-semibold md:text-xl celular:text-[15px] lg:text-2xl">
                  Cédula
                </p>
                <p className="celular:text-[15px] lg:text-[lg]">{dato.COD}</p>
                <p className="font-semibold text-2xl celular:text-[15px] md:text-xl lg:text-2xl">
                  Nombre
                </p>
                <p className="lg:text-lg celular:text-[15px]">{dato.nombre}</p>
                <p className="font-semibold text-2xl celular:text-[15px] md:text-xl lg:text-2xl">
                  Primer Apellido
                </p>
                <p className="lg:text-lg celular:text-[15px]">
                  {dato.primer_apelli}
                </p>
                <p className="font-semibold text-2xl celular:text-[15px] md:text-xl lg:text-2xl">
                  Nombre De Usuario
                </p>
                <p className="lg:text-lg celular:text-[15px]">
                  {dato.username}
                </p>
                <p className="font-semibold text-2xl celular:text-[15px] md:text-xl lg:text-2xl">
                  Gmail
                </p>
                <p className="lg:text-lg celular:text-[15px]">{dato.email}</p>
                <p className="font-semibold text-2xl celular:text-[15px] md:text-xl lg:text-2xl">
                  Municipio
                </p>
                <p className="lg:text-lg celular:text-[15px]">
                  {dato.municipio?.municipio}
                </p>
              </>
            ) : ( sesionUser?.Rol === "Empresa" ? (
              <>
                <p className="font-semibold text-2xl celular:text-[15px] md:text-xl lg:text-2xl">
                  Descripción
                </p>
                <p className="lg:text-lg celular:text-[15px]">
                  {dato1.descripcion}
                </p>

                <p className="font-semibold text-2xl celular:text-[15px] md:text-xl lg:text-2xl">
                  Dirección
                </p>
                <p className="lg:text-lg celular:text-[15px]">
                  {dato1.direccion}
                </p>

                <p className="font-semibold text-2xl celular:text-[15px] md:text-xl lg:text-2xl">
                  Teléfono
                </p>
                <p className="lg:text-lg celular:text-[15px]">
                  {dato1.telefono}
                </p>

                <p className="font-semibold text-2xl celular:text-[15px] md:text-xl lg:text-2xl">
                  Correo electrónico
                </p>
                <p className="lg:text-lg celular:text-[15px]">
                  {dato1.email}
                </p>

                <p className="font-semibold text-2xl celular:text-[15px] md:text-xl lg:text-2xl">
                  Instagram
                </p>
                <p className="lg:text-lg celular:text-[15px]">
                  {dato1.instagram}
                </p>

                <p className="font-semibold text-2xl celular:text-[15px] md:text-xl lg:text-2xl">
                  Facebook
                </p>
                <p className="lg:text-lg celular:text-[15px]">
                  {dato1.facebook}
                </p>
              </>
            ) : (
              <>
                <p className="font-semibold md:text-xl celular:text-[15px] lg:text-2xl">
                  Cédula
                </p>
                <p className="celular:text-[15px] lg:text-[lg]">{dato2.COD}</p>
                <p className="font-semibold text-2xl celular:text-[15px] md:text-xl lg:text-2xl">
                  Nombre
                </p>
                <p className="lg:text-lg celular:text-[15px]">{dato2.nombre_c}</p>
                <p className="font-semibold text-2xl celular:text-[15px] md:text-xl lg:text-2xl">
                  Primer Apellido
                </p>
                <p className="lg:text-lg celular:text-[15px]">
                  {dato2.primer_apelli}
                </p>
                <p className="font-semibold text-2xl celular:text-[15px] md:text-xl lg:text-2xl">
                  Nombre De Usuario
                </p>
                <p className="lg:text-lg celular:text-[15px]">
                  {dato2.username}
                </p>
                <p className="font-semibold text-2xl celular:text-[15px] md:text-xl lg:text-2xl">
                  Gmail
                </p>
                <p className="lg:text-lg celular:text-[15px]">{dato2.email}</p>
                <p className="font-semibold text-2xl celular:text-[15px] md:text-xl lg:text-2xl">
                  Municipio
                </p>
                <p className="lg:text-lg celular:text-[15px]">
                  {dato2.municipio?.municipio}
                </p>
              </>
            ))}

            <div className="flex flex-row-reverse gap-4 mt-2">
              {sesionUser?.Rol === "Administrador" ? (
                <>
                  <ButtonAdmin onClick={eliminar}>Eliminar</ButtonAdmin>
                  <ButtonAdmin href="/administrador/editarAd">
                    Editar Perfil
                  </ButtonAdmin>
                  <ButtonAdmin href="/administrador/crearAdmin">
                    Añadir Administrador
                  </ButtonAdmin>
                </>
              ) : (
                <ButtonAdmin>Editar Datos</ButtonAdmin>
              )}
            </div>
          </div>
        </div>
      </section>
      {cambiar && <EliminarAdmin estado={cambiar} cambiarEstado={setCambiar} />}
    </>
  );
}