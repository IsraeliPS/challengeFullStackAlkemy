
export const Balance=({transactions}) => {
    const ingress=transactions.filter(transaction => transaction.typeOperation === 'ingress')
    const totalIngress=ingress.reduce((total, transaction) => total + parseInt(transaction.amount), 0)

    const egress=transactions.filter(transaction => transaction.typeOperation === 'egress')
    const totalEgress=egress.reduce((total, transaction) => total + parseInt(transaction.amount), 0)

    const total=totalIngress-totalEgress
  
    if (total>0) {
       return (
         <>
           <tr className='ingress'>
             <th colSpan='3'>Ingresos</th>
             <td colSpan='2'>
               <h5 >$ {totalIngress>=0?totalIngress:0}</h5>
             </td>
           </tr>
           <tr className='egress'>
             <th colSpan='3'>Gastos</th>
             <td colSpan='2'>
               <h5 >
                 $ {totalEgress>=0?totalEgress:0}
               </h5>
             </td>
           </tr>
           <tr className='general'>
             <th colSpan='3'>Balance Total</th>
             <td colSpan='2'>
               <h5 >$ {total}</h5>
             </td>
           </tr>
         </>
         )
     } else if (total<0) {
       return (
         <>
           <tr className='ingress'>
             <th colSpan='3'>Ingresos</th>
             <td colSpan='2'>
               <h5>$ {totalIngress>=0?totalIngress:0}</h5>
             </td>
           </tr>
           <tr className='egress'>
             <th colSpan='3'>Gastos</th>
             <td colSpan='2'>
               <h5>
                 $ {totalEgress>=0?totalEgress:0}
               </h5>
             </td>
           </tr>
           <tr className='general'>
             <th colSpan='3'>Balance Total</th>
             <td colSpan='2'>
               <h5>$ {total}</h5>
             </td>
           </tr>
         </>
         )
     } else {
   
       return (
        <>
          <tr className='ingress'>
            <th colSpan='3'>Ingresos</th>
            <td colSpan='2'>
              <h5>$ {totalIngress>=0?totalIngress:0}</h5>
            </td>
          </tr>
          <tr className='egress'>
            <th colSpan='3'>Gastos</th>
            <td colSpan='2'>
              <h5>
                $ {totalEgress>=0?totalEgress:0}
              </h5>
            </td>
          </tr>
          <tr className='general'>
            <th colSpan='3'>Balance Total</th>
            <td colSpan='2'>
              <h5>$ {total}</h5>
            </td>
          </tr>
        </>
         )
     }
   }