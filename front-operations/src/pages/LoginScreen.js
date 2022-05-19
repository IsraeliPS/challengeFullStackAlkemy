import React from 'react'
import { Link } from 'react-router-dom'
import { FormLogin } from '../components/formLoginRegister/FormLogin'

export const LoginScreen = () => {
    return (
        <>
            <section className='container login'>
                <div className='row justify-content-center'>
                    <div className='col-12 col-lg-6'>
                        <header className='login__content-welcome'>
                            <h2>
                                ¡Bienvenido a <br className='d-md-none'/> <span className='highlight'>Mi Aplicación</span>!
                            </h2>
                        </header>
                        <div className='login__card'>
                            <h3 className='text-center mb-3 highlight'>
                                Inicia sesión
                            </h3>
                            <div className='separator'/>
                            <section className='login__content-form'>
                                <FormLogin />
                            </section>
                            
                            <div className='login__content-footer'>
                                <div className='separator'/>
                                <p>
                                    ¿No tienes una cuenta?
                                    <Link to='/register' className='highlight link'> ¡Registrate!</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
      )
}
