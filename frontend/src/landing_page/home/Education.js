import React from 'react';
function Education() {
  return ( 
   <div className='container'>
    <div className='row'>
      <div className='col-6'>
        <img src='media/education.svg' alt=''/>
      </div>
      <div className='col-6 mt-5'>

        <h4 className='text-muted mb-4'>Free and open market education</h4>
        <div className='mb-5'>
          <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <a href='https://zerodha.com/varsity/' style={{textDecoration:"none"}}>Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </div>
        <div>
          <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <a href='https://zerodha.com/varsity/' style={{textDecoration:"none"}}>TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
    </div>
   );
}

export default Education;