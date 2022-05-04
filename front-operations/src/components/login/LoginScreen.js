import React from 'react'
import { Link } from 'react-router-dom'
import { FormLoginRegister } from '../formLoginRegister/FormLoginRegister'

export const LoginScreen = () => {
    return (
        <>
            <section className='container login'>
                <div className='row justify-content-center'>
                    <div className='col-12 col-lg-6'>
                        <header className='login__content-welcome'>
                            <h2>
                                ¡Bienvenido a <br className='d-md-none'/> <span className='text-highlight'>Mi Aplicación</span>!
                            </h2>
                        </header>
                        <div className='login__card'>
                            <h3>
                                Iniciar sesión
                            </h3>
                            <section className='login__content-form'>
                                <FormLoginRegister />
                            </section>
                            <div className='separator'/>
                            <div className='login__content-footer'>
                                <div className='separator'/>
                                <p>
                                    ¿No tienes una cuenta?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
      )
}
