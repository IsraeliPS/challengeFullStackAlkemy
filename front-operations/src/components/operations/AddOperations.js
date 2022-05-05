import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { DatePicker } from '@material-ui/pickers';


export const AddOperations = () => {

  const [dateOperation, setDateOperation] = useState(new Date());

  const { setValue, getValues,  register, handleSubmit, formState: { errors },reset } = useForm();
  const value = getValues('date') 

  useEffect(() => {
    register('date');
  }, [register]);

  useEffect(() => {
    setDateOperation(value || new Date());
  }, [setDateOperation, value]);

  const onSubmit = (data) => {
      if (!data.date) {
        data.date=new Date();
      }
      console.log(data)
    reset()
  }
  
  return (
    <>
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <div className='form-floating mb-3'>                
                <input
                    placeholder="Concepto"
                    className='form-control'
                    type="text"
                    {...register("concept",{
                        required: "El concepto es obligatorio"
                    })}
                />
                <label htmlFor="concept">Concepto</label>
                {errors.concept && <span className='password-checks error' role="alert">{errors.concept.message}</span>}
            </div>
            <div className='form-floating mb-3'>
                <input
                    placeholder="Monto"
                    className='form-control'
                    type="text"
                    {...register("amount",{
                        required: "El monto obligatorio"
                    })}
                />
                <label htmlFor="amount">Monto</label>
                {errors.amount && <span className='password-checks error' role="alert">{errors.amount.message}</span>}
            </div>
            <div className='form-floating mb-3'>
                <DatePicker 
                    className='datePicker'
                    value={dateOperation} 
                    onChange={date=>{
                        setDateOperation(date)
                        setValue('date', date, { shouldValidate: true, shouldDirty: true})
                    }}
                />
            </div>
            
            <div className='form-floating mb-3'>
                <select className='ml-2' {...register("typeOperation")} >
                    <option value="ingress" className='ml-2'>Ingreso</option>
                    <option value="egress" className='ml-2'>Egreso</option>
                </select>
            </div>

            <button type="submit" className='btn mt-3' >Guardar</button>
        </form>
        
    </>
  )
}
