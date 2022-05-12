import React, { useEffect } from 'react'

import { getTransactionsById } from '../../services/users/userService'

export const getOperations = () => {
    useEffect(() => {
        getTransactionsById('1','abc')
        .then(data => {
            if (data.success){
              data.payload?.map((item)=>{
                setOperation(item.operations)
                console.log(item.operations)
              })
            } else {
              console.log('error')
            }
          })
        
      }, [])  
}
