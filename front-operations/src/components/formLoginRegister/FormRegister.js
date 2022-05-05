import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

export const FormRegister = () => {
    const [isShowPassword, setIsShowPassword] = useState(false)
    
    const { register, handleSubmit, formState: { errors },reset } = useForm();

    const onSubmit = async (dataToSend) => {
        
        // await login(data.email, data.password)
        reset()
    }

    const handleClickShowPassword = (nameClass) => {
        setIsShowPassword(!isShowPassword)
        if (isShowPassword) {
          document.querySelectorAll('.floatingPassword').forEach(input => { input.type = 'text' })
          document.querySelectorAll('.show-password').forEach(p => { p.textContent = 'Ocultar' })
          return
        }
        document.querySelectorAll('.floatingPassword').forEach(input => { input.type = 'password' })
        document.querySelectorAll('.show-password').forEach(p => { p.textContent = 'Mostrar' })
      }
  return (
    <>
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <div className='form-floating mb-3'>
                <input
                    placeholder="Nombre"
                    className='form-control'
                    type="text"
                    {...register("firstName", { required: true, maxLength: 30 })}
                />
                <label>Nombre</label>
                {errors.firstName && <span className='password-checks error' role="alert">{errors.firstName.message}</span>}
            </div>
            <div className='form-floating mb-3'>                
                <input
                    placeholder="youremail@mail.com"
                    className='form-control'
                    type="email"
                    {...register("email",{
                        required: "El correo electrónico es obligatorio",
                        pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format"
                        }
                    })}
                />
                <label htmlFor="email">Correo electrónico</label>
                {errors.email && <span className='password-checks error' role="alert">{errors.email.message}</span>}
            </div>
            <div className='form-floating mb-3'>
                
                <p className='show-password' onClick={() => handleClickShowPassword()}>Mostrar</p>
                <input
                    id="password"
                    className='form-control floatingPassword'
                    {...register("password", {
                    required: "La contraseña es obligatoria",
                    minLength: {
                        value: 6,
                        message: "min length is 6"
                    }
                    })}
                    type="password"
                />
                <label htmlFor="password">Contraseña</label>
                {errors.password && <span className='password-checks error' role="alert">{errors.password.message}</span>}
            </div>
            <button type="submit" className='btn'>Registrarme</button>
        </form>
       
    </>
  )
}
