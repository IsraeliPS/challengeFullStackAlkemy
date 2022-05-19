import React, { useEffect } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { LoginScreen } from '../pages/LoginScreen'
import { OperationScreen } from '../pages/OperationScreen'
import { RegisterScreen } from '../pages/RegisterScreen'


import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

import { setToken } from '../lib/sessionStorage'
import { useSelector } from 'react-redux'

// const init = () => {
//   return JSON.parse(getToken()) || { logged: false }
// }

export const AppRouter = () => {
  // const {user} = useSelector( state => state );
  // console.log(user)

  // useEffect(() => {
  //   if (!user.logged) return
  //   console.log('user.logged')
  //   // setToken(user.token)
  //   // localStorage.setItem('user', JSON.stringify(user))
  // }, [user.logged])

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/*' element={
            <PublicRoute>
              <LoginScreen />
            </PublicRoute>
          }
        />
        <Route
          path='/register' element={
            <PublicRoute>
              <RegisterScreen />
            </PublicRoute>
          }
        />

        <Route
          path='/operation' element={
            <PrivateRoute>
              <OperationScreen />
            </PrivateRoute>
        }
        />
      </Routes>
    </BrowserRouter>
  )
}