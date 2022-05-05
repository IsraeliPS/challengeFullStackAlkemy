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
  }