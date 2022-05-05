import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { LoginScreen } from '../pages/LoginScreen'
import { OperationScreen } from '../pages/OperationScreen'
import { RegisterScreen } from '../pages/RegisterScreen'
// import { DashboardRoutes } from './DashboardRoutes'

import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
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