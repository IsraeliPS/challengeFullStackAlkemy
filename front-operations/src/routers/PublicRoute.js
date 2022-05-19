import React from 'react'

import { Navigate } from 'react-router-dom'

import { getToken } from '../lib/sessionStorage'

export const PublicRoute = ({ children }) => {
  
    const token = JSON.parse(getToken())
    return !token
      && children    
}

//   : <Navigate to='/login' />
  
  

  // const {user} = useSelector( state => state );
  // console.log(user.logged)
  // return user.logged
  //   ? children
  //   : <Navigate to='/' />
  // return !user.logged
  //   ? <Navigate to='/' />
  //   : children


  // const [userAuth, setUserAuth] = useState({})
  // const [user, dispatch] = useReducer(userReducer, {}, init)
  // const dispatch=useDispatch()

  
  // useEffect(() => {
  //   if (!user) return

  //   localStorage.setItem('user', JSON.stringify(user))
  // }, [user])