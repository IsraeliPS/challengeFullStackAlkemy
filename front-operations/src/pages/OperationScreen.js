// import React, { useContext, useState } from 'react'
import React from 'react';

// import { AuthContext } from '../auth/authContext'
import { AddOperations } from '../components/operations/AddOperations'
import { ListOperations } from '../components/operations/ListOperations'
// import { Navbar } from '../components/navbar/Navbar'
// import { getTransactionsById } from '../services/users/userService'
import {getTransactionsAction} from '../reducers/operationReducer'
import { connect } from 'react-redux';

export const OperationScreen = ({ getTransactionsAction }) => {
  // const { user } = useContext(AuthContext)
  // const [operation, setOperation] = useState({})
  // const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      {/* <Navbar /> */}
      <h1>OperationScreen</h1>
      <div className='container'>
        <div className='row listOperations'>
          <div className='col-3'>
            {/* <AddOperations state={state} dispatch={dispatch}/> */}
            <AddOperations />
          </div>
          <div className='col-9'>
            {/* <ListOperations state={state} dispatch={dispatch} operation={operation}/> */}
            <ListOperations />
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps=(state) =>{
  return {
    transactions: state.transactions
  }
}

export default connect(mapStateToProps, {getTransactionsAction})(OperationScreen)