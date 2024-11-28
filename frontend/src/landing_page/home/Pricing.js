import React from 'react';
function Pricing() {
  return ( 
    <div className='container m-5'>
      <div className='row'>
        <div className='col-4' style={{position:"relative",left:"11%"}}>
          <h1 className='mb-5'>
            Unbeatable pricing
          </h1>
          <p className='mb-2'> We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <a href='https://zerodha.com/pricing' style={{ textDecoration: "none" }}> See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </div>
        <div className='col-3'></div>
        <div className='col-5'>
          <div className='row'>
            <div className='col-6 text-center p-2' style={{border:"1px solid black"}}>
              <h1><i class="fa fa-inr" aria-hidden="true"></i>0</h1>
              <p> free equity delivery and direct mutual funds</p>
            </div>
            <div className='col-6 text-center p-2'style={{border:"1px solid black"}}>
            <h1><i class="fa fa-inr" aria-hidden="true"></i>20</h1>
            <p> Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
   );
}

export default Pricing;