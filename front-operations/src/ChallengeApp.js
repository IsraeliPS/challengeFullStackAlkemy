import React, { useState } from 'react'
import { AppRouter } from './routers/AppRouter'
import { AuthContext } from './auth/authContext'


// import { authReducer } from './auth/authReducer'

// const init = () => {
//   return JSON.parse(localStorage.getItem('user')) || { logged: false }
// }

export const ChallengeApp = () => {
  const [userAuth, setUserAuth] = useState({})
  // const [user, dispatch] = useReducer(authReducer, {}, init)

  // useEffect(() => {
  //   if (!user) return

  //   localStorage.setItem('user', JSON.stringify(user))
  // }, [user])

  return (
    <AuthContext.Provider value={{
      userAuth,
      setUserAuth
    }}
    >
      <AppRouter />
    </AuthContext.Provider>
  )
}