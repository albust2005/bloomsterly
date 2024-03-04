// Importación de los elementos previamente descargados

import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"; 
//import React from "react";
import '../App.css'

// Creación de un Hook para renderizar el formulario de ingreso

//Elemento encapsulado del Registro
export function Ingresar() {
    //Importación de funciones de la galeria useForm
    const { register, formState : {errors}, handleSubmit } = useForm();

    // Verificación del envio de los datos por el formulario
    const enviar = (data) => {
        console.log(data);
    }

    // Ingreso al aplicativo
    return (
        <section>
            <section>
                <i></i> 
                <div className="">
                    <h3>Crea una cuenta</h3>
                    <input type="submit" value={'Registrate'}/>
                </div>
            </section>
            <section>
                <h1 className="font-bloomsterly text-6xl">
                    BloomSterly
                </h1>
                {/*formulario Ingresar*/}
                <form onSubmit={handleSubmit(enviar)} className='flex flex-col gap-3'>
                    <div className='flex flex-col'>
                        {/*Sección registro nombre*/}
                        <label className="font-title italic">
                            Correo Electronico
                        </label>
                        <input type="text" {...register('email',{
                            required: true
                        })}
                        className='bg-transparent border-b-2 border-dark_theme 
                        focus:outline-none'/>
                        {/*Muestra de errores*/}
                        {errors.email?.type === 'required' && <p>El campo es requerido</p>}
                    </div>
                    <div className='flex flex-col'>
                        {/*Sección contraseña*/}
                        <label className="font-title italic">Contraseña</label>
                        <input type="password" {...register('password',{
                            required: true
                        })}
                        className='bg-transparent border-b-2 border-dark_theme 
                        focus:outline-none'/>
                        {/*Muestra de errores*/}
                        {errors.password?.type === 'required' && <p>El campo es requerido</p>}
                    </div>
                    {/*Boton de envio*/}
                    <button  type="submit"
                    className="bg-dark_theme text-white rounded-md mt-4 pl-2 pr-2 pt-1 pb-1 w-full">
                        Inicia Sesión
                    </button>
                    <Link to="/recuperarpassword">
                    </Link>
                </form>
            </section>
        </section>
    )
}