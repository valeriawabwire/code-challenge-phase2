import React from 'react'
import './List.css'


function List({props}) {
  return props.map(({id,first_name,last_name,email,gender,fee_balance})=> (
    <div key={id} className='props'>
      <h4>first_name:{first_name}</h4>
      <h4>last_name:{last_name}</h4>
      <p>email:{email}</p>
      <p>gender:{gender}</p>
      <p>fee_balance:{fee_balance}</p> <br/>
      <button >Delete</button> 

    </div>
  ))}


export default List;