import React from 'react'
import { useLocation } from 'react-router-dom'

const Info = () => {
    const state = useLocation();
    const {firstname,lastname,fathername,email,phone,address} = state.state;
    console.log(state);
    console.log(state.firstname);
  return (
   <>
   
    
   <h1>{firstname}</h1>
     <h1>{lastname}</h1>
     <h1>{fathername}</h1>
     <h1>{email}</h1>
     <h1>{phone}</h1>
     <h1>{address}</h1>
   
    </>
  )
}

export default Info
