import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { DatePicker } from "@material-ui/pickers";

import { useDispatch, useSelector } from "react-redux";
import { createTransactionAction, setTotalOperationsAction, updateCanceledAction, updateSaveTransactionAction } from "../../reducers/operationReducer";
import { getToken } from "../../lib/sessionStorage";
import AuthenticateContext from "../../context/AuthenticateContext";


export const AddOperations = ({updateUser, setUpdateUser}) => {
  const [dateOperation, setDateOperation] = useState(new Date());
  
  const token=getToken()
  const dispatch = useDispatch()
  
  const { userAuth } = useContext(AuthenticateContext);
  const {payload:userId }=userAuth
  
  const {updating}= useSelector(state=>state.operations)
  const state= useSelector(state=>state.operations)
  
  const {
    setValue,
    getValues,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const value = getValues("date");

  useEffect(() => {
    if (updating && updateUser.operationId) {
      const valueFilter=state.transactions.filter(data=>data.operationId===updateUser.operationId)
      setValue('concept', valueFilter[0].concept);
      setValue('amount', valueFilter[0].amount);
      setValue('date',valueFilter[0].dateOperation, {
        shouldValidate: true,
        shouldDirty: true,
      });
      
      setValue('typeOperation', valueFilter[0].typeOperation);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updating, updateUser]);

  useEffect(() => {
    register("date");
  }, [register]);

  useEffect(() => {
    setDateOperation(value || new Date());
  }, [setDateOperation, value]);

  const onSubmit = (data, e ) => {
    e.preventDefault();
    
    if (!data.date) {
      data.date = new Date();
    }

    if (updateUser.operationId) {
      
      data={...data,
        date:dateOperation,
        userId:userId,
        operationId:updateUser.operationId}
      
        
      dispatch(updateSaveTransactionAction(data,token));
      setUpdateUser({});

    } else {
      
      data={...data,date:dateOperation,userId}
      const count=state.transactions.length
      dispatch(createTransactionAction(data, count, token));
      dispatch(setTotalOperationsAction(userId))
    }
    reset();
  };

  const handlerCancelar = (e) => {
    e.preventDefault();
    dispatch(updateCanceledAction())
    reset();
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-floating mb-3">
          <input
            placeholder="Concepto"
            className="form-control"
            type="text"
            {...register("concept", {
              required: "El concepto es obligatorio",
              minLength: {value: 3, message: "El concepto debe tener al menos 3 caracteres"}
            })}
          />
          <label htmlFor="concept">Concepto</label>
          {errors.concept && (
            <span className="input-checks-error" role="alert">
              {errors.concept.message}
            </span>
          )}
        </div>
        <div className="form-floating mb-3">
          <input
            placeholder="Monto"
            className="form-control"
            type="text"
            {...register("amount", {
              required: "El monto obligatorio",
              minLength: {value: 1, message: "El monto debe tener al menos 1 número "},
              pattern: { value: /^[0-9]+\.?[0-9]*$/i, message: 'Solo se admiten números' }
              
            })}
          />
          <label htmlFor="amount">Monto</label>
          {errors.amount && (
            <span className="input-checks-error" role="alert">
              {errors.amount.message}
            </span>
          )}
        </div>
        <div className="form-floating mb-3">
          <DatePicker
            className="datePicker"
            value={dateOperation}
            onChange={(date) => {
              setDateOperation(date);
              setValue("date", date, {
                shouldValidate: true,
                shouldDirty: true,
              });
            }}
          />
        </div>
        {
          updating && updateUser?.operationId 
          ? (
            <div className="form-floating mb-3">
              <select className="ml-2" {...register("typeOperation") } disabled>
                <option value="ingress" className="ml-2">
                  Ingreso
                </option>
                <option value="egress" className="ml-2">
                  Egreso
                </option>
              </select>
            </div>
          )
          : (
            <div className="form-floating mb-3">
              <select className="ml-2" {...register("typeOperation")}>
                <option value="ingress" className="ml-2">
                  Ingreso
                </option>
                <option value="egress" className="ml-2">
                  Egreso
                </option>
              </select>
            </div>
          )

        }

        
        {
          updating && updateUser?.operationId 
          ? 
          (
            <>
              <button className="btn mt-3 btn-error" onClick={handlerCancelar}>
                Cancelar
              </button>
              <button type="submit" className="btn mt-3">
                Actualizar
              </button>
            </>
          ) : 
          (
            <button type="submit" className="btn mt-3">
              Guardar
            </button>
          )
        }
      </form>
    </>
  );
};
