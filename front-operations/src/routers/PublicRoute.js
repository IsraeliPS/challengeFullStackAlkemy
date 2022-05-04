import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../auth/authContext'

export const PublicRoute = ({ children }) => {
  const { userAuth } = useContext(AuthContext)
console.log(userAuth)
  return !userAuth
    ? <Navigate to='/' />
    : children
}