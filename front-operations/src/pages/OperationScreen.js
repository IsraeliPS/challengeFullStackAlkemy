// import React, { useContext, useState } from 'react'
import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { AddOperations } from '../components/operations/AddOperations'
import AuthenticateContext from '../context/AuthenticateContext';
import { ListOperations } from '../components/operations/ListOperations'
import { Navbar } from '../components/navbar/Navbar'
import { getTransactionsAction, setTotalOperationsAction } from '../reducers/operationReducer';

export const OperationScreen = () => {
  const [updateUser, setUpdateUser] = useState({})
  const { userAuth } = useContext(AuthenticateContext)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTransactionsAction(userAuth.payload))
    dispatch(setTotalOperationsAction(userAuth.payload))
    // eslint-disable-next-line
  },[userAuth])
  

  return (
    <>
      <Navbar />
      
      <div className='container mt-5'>
        <div className='row listOperations'>
          <div className='col-3'>
            <AddOperations updateUser={updateUser} setUpdateUser={setUpdateUser}/>
          </div>
          <div className='col-9'>
            <ListOperations setUpdateUser={setUpdateUser}/>
          </div>
        </div>
      </div>
    </>
  )
}

