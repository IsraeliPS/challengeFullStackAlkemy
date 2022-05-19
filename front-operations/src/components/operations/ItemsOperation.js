import React from 'react'
import { connect, useDispatch } from 'react-redux';
import { dateFormat } from '../../lib/dateFormat';
import { deleteTransactionAction, updateTransactionAction } from '../../reducers/operationReducer';

export const ItemsOperation = ({operationId, concept, amount, typeOperation, userId, dateOperation,setUpdateUser}) => {
    
    const dispatch = useDispatch();
    
    const date = dateFormat(dateOperation, 'dd/MM/yyyy');

    const handlerDelete = () => {
      dispatch(deleteTransactionAction(userId, operationId));
    }

    const handlerUpdate = () => {
      setUpdateUser({ operationId, userId });
      dispatch(updateTransactionAction());
    }

    const type=typeOperation === 'ingress' ? 'Ingreso' : 'Gasto';

  return (
      <tr key={operationId}>
        
        <td>{concept.toUpperCase()}</td>
        <td>{amount}</td>
        <td>{date}</td>
        <td>{type.toUpperCase()}</td>
        <td>
          <button className='btn-warning' onClick={handlerUpdate}>📝</button>
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