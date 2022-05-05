import React, { useContext } from 'react'
import { AuthContext } from '../auth/authContext'
import { AddOperations } from '../components/operations/AddOperations'
import { ListOperations } from '../components/operations/ListOperations'
import { Navbar } from '../components/navbar/Navbar'

export const OperationScreen = () => {
  const { user } = useContext(AuthContext)

  return (
    <>
      {/* <Navbar /> */}
        <h1>OperationScreen</h1>

        <div className='row'>
          <div className='col-4'>
            <AddOperations />
          </div>
          <div className='col-8'>
            <ListOperations/>
          </div>
      </div>
    </>
  )
}
