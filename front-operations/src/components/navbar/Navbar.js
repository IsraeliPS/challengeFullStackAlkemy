import React, { useContext } from 'react'

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AuthenticateContext from '../../context/AuthenticateContext';

import { deleteToken } from '../../lib/sessionStorage';
import { logoutAction } from '../../reducers/operationReducer';

export const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { userAuth } = useContext(AuthenticateContext);

  const handleLogout = () => {
    deleteToken()
    dispatch(logoutAction())
    navigate('/login', { replace: true });
  }

  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>

      <div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end'>
        <ul className='navbar-nav ml-auto'>
          <span className='nav-item nav-link text-info'>
            Bienvenid@ {userAuth.name} !!!
          </span>
          <button 
            className='nav-item nav-link btn btn-logout'
            onClick={handleLogout}
          >
            Cerrar sesión
          </button>
        </ul>
      </div>
    </nav>
  )
}