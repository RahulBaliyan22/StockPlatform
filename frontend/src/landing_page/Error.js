import React from 'react';
import {Link} from 'react-router-dom';
function Error() {
  return ( 
    <div className='container p-5 m-5'>
      <div className ='row text-center'>
        <h1 className='text-muted'>404 Page Not Found</h1>
        <p className='fs-5 mt-2'>Sorry page does not exist.</p>
        <button className='rounded-1 p-2 fs-5 mt-5'
        style={{width:"15%",margin:"0 auto",backgroundColor:"#387ed1",color: "#fff",border: "1px solid rgba(0, 0, 0, 0)"}}><Link to="/" style={{color:"#FFFFFF"}}>Go Home</Link></button>
      </div>
       
    </div>
   );
}

export default Error;