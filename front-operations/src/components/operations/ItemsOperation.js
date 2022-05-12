import React from 'react'
import { connect, useDispatch } from 'react-redux';
import { dateFormat } from '../../lib/dateFormat';
import { deleteTransactionAction } from '../../reducers/operationReducer';

export const ItemsOperation = ({operationId, concept, amount, typeOperation, userId, dateOperation}) => {
    
    const dispatch = useDispatch();
    
    const date = dateFormat(dateOperation, 'dd/MM/yyyy');

    const handlerDelete = () => {
      dispatch(deleteTransactionAction(userId, operationId));
    }

    const type=typeOperation === 'ingress' ? 'Ingreso' : 'Gasto';

  return (
      <tr key={operationId}>
        <td>{operationId}</td>
        <td>{concept.toUpperCase()}</td>
        <td>{amount}</td>
        <td>{date}</td>
        <td>{type.toUpperCase()}</td>
        <td>
          <button className='btn-warning'>📝</button>
          <button className='btn-danger' onClick={handlerDelete}>🗑️</button>
        </td>
      </tr>
  )
}

const mapState = state => {
  return {
    transactions: state.operations.transactions
  }
}

export default connect(mapState)(ItemsOperation)