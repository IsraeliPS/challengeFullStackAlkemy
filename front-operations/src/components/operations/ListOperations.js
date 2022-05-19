import React from 'react'
import { connect, useSelector } from 'react-redux'

import { ItemsOperation } from './ItemsOperation'
import { Balance } from './totalOperations'

export const ListOperations = ({setUpdateUser}) => {
  
const { transactions } = useSelector(state => state.operations)

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
            transactions.map(data=>(
              <ItemsOperation 
              key={data.operationId}
              {...data}
              setUpdateUser={setUpdateUser}/>
            ))
          }
        </tbody>
        <tfoot>
          <Balance transactions={transactions}/>
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