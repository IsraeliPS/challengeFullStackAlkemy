import { URL_BASE } from "../config";

const createTransaction=async (data)=> {
  const URL = `${URL_BASE}operation`;
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
  };
  return fetch(URL, options).then((response) => response.json());
}

const getTransactions=async (id, token) =>{
  const URL = `${URL_BASE}user/${id}`;
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
  };
  return await fetch(URL, options)
  .then((res) => res.json())
}

const updateTransaction=async (data)=> {
  const URL = `${URL_BASE}operation`;
  const options = {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
  }
  return fetch(URL, options).then((response) => response.json());
}

const deleteTransaction=async (userId, operationId, token) =>{
  const URL = `${URL_BASE}operation`;
  
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body:JSON.stringify({
      userId,
      operationId
    }),
    mode: "cors",
  }
  return await fetch(URL, options)
  .then((res) => res.json())
}

export { createTransaction, getTransactions, updateTransaction, deleteTransaction };

//   import { URL_BASE } from '../config'

// function createAccount (data) {
//   const URL = `${URL_BASE}dealers`
//   const options = {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     mode: 'cors'
//   }
//   return fetch(URL, options)
// }

// function updateById (idUser, newData, token) {
//   const URL = `${URL_BASE}dealers/${idUser}`
//   const options = {
//     method: 'PATCH',
//     body: newData,
//     headers: {
//       Authorization: token,
//       mode: 'cors'
//     }
//   }
//   return fetch(URL, options)
// }
// function updateId (idUser, newData, token) {
//   const URL = `${URL_BASE}dealers/update/${idUser}`
//   const options = {
//     method: 'PATCH',
//     body: newData,
//     headers: {
//       Authorization: token,
//       mode: 'cors'
//     }
//   }
//   return fetch(URL, options)
// }

// export {
//   createAccount,
//   getDataDelivery,
//   updateById,
//   updateId
// }
