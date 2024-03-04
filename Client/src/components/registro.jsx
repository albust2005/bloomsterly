//Importar elementos previamente creados
import '../App.css'
import { useForm } from 'react-hook-form'

// Creación de un Custom Hook para renderizar el formulario


// Elemento encapsulado del Registro
export function Registrar() {

    // Importanción de funciones de la galeria useForm
    const { register, formState : { errors }, handleSubmit } = useForm();

    // Evidencia de los elementos enviados por el formulario (provicional)
    const enviar = (data) => {
        console.log(data);
    }

    //Registro 
    return(
        <section>
            <section>
                <h1 className="font-bloomsterly text-6xl">BloomSterly</h1>
                {/*Formulario Registro*/}
                <form onSubmit={handleSubmit(enviar)} className='flex flex-col gap-3'>
                    <div className='flex flex-col'>
                        {/*Sección registro Nombre*/}
                        <label className="font-title italic">Nombre</label>
                        <input type="text" {...register('nombre')}
                        className='bg-transparent border-b-2 border-dark_theme 
                        focus:outline-none '/>
                    </div>
                    <div className='flex flex-col'>
                        {/*Sección registro Correo electronico*/}
                        <label className="font-title italic">Correo Electronico</label>
                        <input type="email" {...register('correo')}
                        className='bg-transparent border-b-2 border-dark_theme 
                        focus:outline-none'/>
                    </div>
                    <div className='flex flex-col'>
                        {/*Sección contraseña*/}
                        <label className="font-title italic">Contraseña</label>
                        <input type="password" {...register('contrasena', {
                            required: true
                        })}
                        className='bg-transparent border-b-2 border-dark_theme 
                        focus:outline-none'/>
                        {/*Validación de la contraseña (provicional)*/}
                        {errors.contrasena?.type === 'required' && <p>EL campo es requerido</p>}
                    </div >  
                    {/*Boton de envio de datos*/}
                    <button type='submit' 
                    className="bg-dark_theme text-white 
                    rounded-md mt-4 pl-2 pr-2 pt-1 pb-1 w-full dark:bg-second_color_lt ">
                        Registrate
                    </button>
                </form>
            </section>
            <section>
                <i></i>
                <div>
                    <p>Bienvenid@</p>
                    <input type="submit" value={'Inicio Sesion'}/>
                </div>
            </section>
        </section>
    )
}