import React from 'react';
import {Link} from 'react-router-dom';
function OpenAccount() {
  return ( 
    <div className='container p-5 m-5'>
      <div className ='row text-center'>
        <h2 >Open a Zerodha account</h2>
        <p className='fs-5 mt-3'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
        <button className='rounded-1 p-2 fs-5 mt-3'
        style={{width:"15%",margin:"0 auto",backgroundColor:"#387ed1",border: "1px solid rgba(0, 0, 0, 0)"}}><Link to="/signup" style={{color: "#fff"}}>Sign up for free</Link></button>
      </div>  
    </div>
   );
}

export default OpenAccount;