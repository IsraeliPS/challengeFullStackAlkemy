function setToken (token) {
    window.sessionStorage.setItem('authToken', token)
  }
  
  function getToken () {
    return window.sessionStorage.getItem('authToken')
  }
  
  function deleteToken () {
    window.sessionStorage.removeItem('authToken')
  }
  
  export { setToken, getToken, deleteToken }
  