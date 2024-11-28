import React from 'react';
import {Link} from 'react-router-dom';
function Hero() {
  return ( 
    <div className='container p-5'>
      <div className ='row text-center'>
        <img src='media\homeHero.png' alt='no_image' className=' p-5'/>
        <h1 className=''>Invest in everything</h1>
        <p className='fs-5 mt-2'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button className='rounded-1 p-2 fs-5 mt-5'
        style={{width:"15%",margin:"0 auto",backgroundColor:"#387ed1",border: "1px solid rgba(0, 0, 0, 0)"}}><Link to="/signup" style={{color: "#fff"}}>Sign up for free</Link></button>
      </div>  
    </div>
   );
}

export default Hero;