import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { getToken } from '../lib/sessionStorage'


export const PrivateRoute = ({ children }) => {
   const token = JSON.parse(getToken())
   return token
      && children
  // const { user } = useContext(AuthContext)

  // return user.logged
  //   ? children
  //   : <Navigate to='/login' />
}