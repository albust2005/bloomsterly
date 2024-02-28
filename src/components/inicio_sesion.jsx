// Importación de los elementos previamente descargados

import { useForm } from "react-hook-form"; 
import React from "react";
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
        <main>
            <section>
                <i></i>
                <div>
                    <h3>Crea una cuenta</h3>
                    <input type="submit" value={'Registrate'}/>
                </div>
            </section>
            <section>
                <h1>BloomSterly</h1>
                {'formulario Ingresar'}
                <form onSubmit={handleSubmit(enviar)}>
                    <div>
                        {'Sección registro nombre'}
                        <label>Correo Electronico</label>
                        <input type="text" {...register('email',{
                            required: true
                        })}/>
                        {'Muestra de errores'}
                        {errors.email?.type === 'required' && <p>El campo es requerido</p>}
                    </div>
                    <div>
                        {'Sección contraseña'}
                        <label>Contraseña</label>
                        <input type="password" {...register('password',{
                            required: true
                        })}/>
                        {'Muestra de errores'}
                        {errors.password?.type === 'required' && <p>El campo es requerido</p>}
                    </div>
                    {'Boton de envio'}
                    <input type="submit"  value={'Enviar'}/>
                </form>
            </section>
        </main>
    )
}