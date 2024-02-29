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
        <main className=''>
            <section className="">
                <h1 className="font-bloomsterly text-6xl">BloomSterly</h1>
                {/*Formulario Registro*/}
                <form onSubmit={handleSubmit(enviar)}>
                    <div>
                        {/*Sección registro Correo electronico*/}
                        <label>Correo Electronico</label>
                        <input type="email" {...register('correo')}/>
                    </div>
                    <div>
                        {/*Sección contraseña*/}
                        <label>Contraseña</label>
                        <input type="password" {...register('contrasena', {
                            required: true
                        })}/>
                        {/*Validación de la contraseña (provicional)*/}
                        {errors.contrasena?.type === 'required' && <p>EL campo es requerido</p>}
                    </div>  
                    {/*Boton de envio de datos*/}
                    <input type="submit" value="Enviar"/>
                </form>
            </section>
            <section>
                <i></i>
                <div>
                    <p>Bienvenid@</p>
                    <input type="submit" value={'Inicio Sesion'}/>
                </div>
            </section>
        </main>
    )
}