import { setToken } from "../lib/sessionStorage"
import { login } from "../services/users/userService"


const initialState = {
    logged: false,
    loading: false,
    error: null,
    payload:[]
}

// Constants

const GET_USER = 'GET_USER'
const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
const GET_USER_FAILURE = 'GET_USER_FAILURE'

const LOGIN= 'LOGIN'

const LOGOUT = 'LOGOUT'

// Reducer
export default function reducer (state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                loading: true,
                logged: true
            }
        case LOGOUT:
            return {
                ...state,
                loading: false,
                logged: false
            }

        case GET_USER:
            return {
                ...state,
                loading: true
            }
        case GET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                payload: action.payload
            }
        case GET_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const loginAction = (data) => {
    return dispatch=>{
        dispatch({type: GET_USER})

        try{
            login(data)
            .then(res=>{
                dispatch({type: LOGIN})
                setToken(res.token)
            })
        } catch(e){
            dispatch({type: GET_USER_FAILURE, payload: e.message})
        }

    }
}
