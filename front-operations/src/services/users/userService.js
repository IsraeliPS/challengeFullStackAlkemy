import { URL_BASE } from '../config'

function createAccount (data) {
    const URL = `${URL_BASE}users`
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors'
    }
    return fetch(URL, options)
    .then(res => res.json())
  }

  function login (credentials) {
    const URL = `${URL_BASE}auth`
    const options = {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors'
    }
    return fetch(URL, options)
    .then(res => res.json())
  }

  function getTransactionsById (id, token) {
    const URL = `${URL_BASE}user/${id}`
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors'
    }
    return fetch(URL, options)
    .then(res => res.json())
  }

  export {
    createAccount,
    login,
    getTransactionsById
  }
