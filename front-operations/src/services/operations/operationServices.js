import { URL_BASE } from "../config";

const getTransactions=async (id) =>{
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

const createTransaction=async (data,token)=> {
  const URL = `${URL_BASE}operation`;
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      'authorization': token
    },
    mode: "cors",
  };
  return await fetch(URL, options)
  .then((res) => res.json())
  
}

const updateTransaction=async (data,token)=> {
  const URL = `${URL_BASE}operation`;
  const options = {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      'authorization': token
    },
    mode: "cors",
  }
  return await fetch(URL, options)
  .then((response) => response.json());
}

const deleteTransaction=async (userId, operationId, token) =>{
  const URL = `${URL_BASE}operation`;
  
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'authorization': token
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

const getTotalOperations=async (id) =>{
  const URL = `${URL_BASE}operation/${id}`;
  const options = {
    headers: {
      "Content-Type": "application/json",
    },

    mode: "cors",
  };
  return await fetch(URL, options)
  .then((res) => res.json())
}

export { createTransaction, getTransactions, updateTransaction, deleteTransaction, getTotalOperations };