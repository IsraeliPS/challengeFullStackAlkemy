import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

// app-reducers
import operationReducer, { getTransactionsAction } from './operationReducer'
import userReducer from './userReducer'

const mainReducer = combineReducers({
  operations: operationReducer,
  user: userReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const generateStore=()=>{
    const store=createStore(
    mainReducer,
    composeEnhancers(applyMiddleware(thunk)
    ))
    
    getTransactionsAction()(store.dispatch, store.getState)
    return store
 }
