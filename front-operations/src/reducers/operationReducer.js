import { createTransaction, deleteTransaction, getTransactions, updateTransaction } from '../services/operations/operationServices'

const initialState = {
    transactions: [],
    loading: false,
    fetching: false,
    updating: false,
    error: null
}


// Constants
const GET_TRANSACTIONS = 'GET_TRANSACTIONS'
const GET_TRANSACTIONS_SUCCESS = 'GET_TRANSACTIONS_SUCCESS'
const GET_TRANSACTIONS_FAILURE = 'GET_TRANSACTIONS_FAILURE'

const CREATE_TRANSACTION = 'CREATE_TRANSACTION'
const CREATE_TRANSACTION_SUCCESS = 'CREATE_TRANSACTION_SUCCESS'
const CREATE_TRANSACTION_FAILURE = 'CREATE_TRANSACTION_FAILURE'

const UPDATE_TRANSACTION = 'UPDATE_TRANSACTION'
const UPDATE_TRANSACTION_SUCCESS = 'UPDATE_TRANSACTION_SUCCESS'
const UPDATE_TRANSACTION_FAILURE = 'UPDATE_TRANSACTION_FAILURE'

const DELETE_TRANSACTION = 'DELETE_TRANSACTION'
const DELETE_TRANSACTION_SUCCESS = 'DELETE_TRANSACTION_SUCCESS'
const DELETE_TRANSACTION_FAILURE = 'DELETE_TRANSACTION_FAILURE'

// Reducer
export default function reducer (state = initialState, action) {
    switch (action.type) {
        case GET_TRANSACTIONS:
            return {
                ...state,
                loading: true
            }
        case GET_TRANSACTIONS_SUCCESS:
            return {
                ...state,
                loading: false,
                transactions: action.payload
            }
        case GET_TRANSACTIONS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }


        case CREATE_TRANSACTION:
            return {
                ...state,
                loading: true
            }
        case CREATE_TRANSACTION_SUCCESS:
            return {
                ...state,
                loading: false,
                transactions: [...state.transactions, action.payload]
            }
        case CREATE_TRANSACTION_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }


        case UPDATE_TRANSACTION:
            return {
                ...state,
                loading: false,
                updating: true
            }
        case UPDATE_TRANSACTION_SUCCESS:
            return {
                ...state,
                loading: false,
                transactions: state.transactions.map(transaction => {
                    if (transaction.id === action.payload.id) {
                        return action.payload
                    }
                    return transaction
                })
            }
        case UPDATE_TRANSACTION_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }


        case DELETE_TRANSACTION:
            return {
                ...state,
                loading: true,
            }
        case DELETE_TRANSACTION_SUCCESS:
            return {
                ...state,
                loading: false,
                transactions: action.payload
            }
        case DELETE_TRANSACTION_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

// Action creators
export const getTransactionsAction = () => {
    return dispatch => {
        dispatch({ type: GET_TRANSACTIONS })
        try {
            getTransactions(1,'token')
            .then(res =>{
                let oper=[]
                res.payload.map (user => user.operations.map(operation => {
                    const {concept, amount, typeOperation, userId, dateOperation, operationId} = operation
                    return oper= [...oper,{operationId, concept, amount, typeOperation, userId, dateOperation}]
                }))
                dispatch({ 
                    type: GET_TRANSACTIONS_SUCCESS,
                    payload: oper
                })
            })
            .catch(err => {
                console.log(err)
                dispatch({
                    type: GET_TRANSACTIONS_FAILURE,
                    payload: err
                })

            })
        } catch (error) {
            console.log('operationReducer',error)
        }
    }
}

export const createTransactionAction = (data) => {
    return dispatch => {
        dispatch({ type: CREATE_TRANSACTION })
        try {
            createTransaction(data,'token')
            .then(res =>{
                dispatch({
                    type: CREATE_TRANSACTION_SUCCESS,
                    payload: res.payload
                })
            })
            .catch(err => {
                console.log(err)
                dispatch({
                    type: CREATE_TRANSACTION_FAILURE,
                    payload: err
                })
            })
        } catch (error) {
            console.log('operationReducer',error)
        }
    }
}

export const updateTransactionAction = (data) => {
    return dispatch => {
        dispatch({ type: UPDATE_TRANSACTION })        
    }
}

export const deleteTransactionAction = (userId, operationId) => {
    return (dispatch,getState) => {
        dispatch({ type: DELETE_TRANSACTION })
        try {
            const data = getState()
            const valueFilter=data.operations.transactions.filter(transaction => transaction.operationId !== operationId)

            deleteTransaction(userId, operationId,'token')
            .then(res =>{
                dispatch({
                    type: DELETE_TRANSACTION_SUCCESS,
                    payload: valueFilter
                })
            })
            .catch(err => {
                console.log(err)
                dispatch({
                    type: DELETE_TRANSACTION_FAILURE,
                    payload: err
                })
            })
        } catch (error) {
            console.log('operationReducer',error)
        }
    }
}