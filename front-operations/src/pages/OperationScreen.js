// import React, { useContext, useState } from 'react'
import React, { useState } from 'react';

import { AddOperations } from '../components/operations/AddOperations'
import { ListOperations } from '../components/operations/ListOperations'

import { Navbar } from '../components/navbar/Navbar'

export const OperationScreen = () => {
  const [updateUser, setUpdateUser] = useState({})
  

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

