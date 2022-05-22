import React from 'react'
import { connect, useSelector } from 'react-redux'
// import { invertArray } from '../../lib/invertArray'

import { ItemsOperation } from './ItemsOperation'
import { TotalOperations } from './TotalOperations'

export const ListOperations = ({setUpdateUser}) => {
  
  const { transactions } = useSelector(state => state.operations)
  
  
  transactions.sort((a, b) => {
    return b.operationId - a.operationId
  })

  const only10=transactions.slice(0,10)

  if (transactions.length === 0) {
    return (
      <div className='container'>
        <h2>No hay operaciones registradas</h2>
      </div>
    )
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Concepto</th>
            <th>Cantidad</th>
            <th>Fecha</th>
            <th>Tipo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          
          {
            
            only10?.map(data=>(
              <ItemsOperation 
              key={data.operationId}
              {...data}
              setUpdateUser={setUpdateUser}/>
            ))
          }
        </tbody>
        <tfoot>
          <TotalOperations transactions={transactions}/>
        </tfoot>

      </table>
      

    
    </>
  )
}


const mapState = state => {
  return {
    transactions: state.operations.transactions
  }
}

export default connect(mapState)(ListOperations)