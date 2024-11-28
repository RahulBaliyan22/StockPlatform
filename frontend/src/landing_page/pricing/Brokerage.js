import React from 'react';
import {Link} from 'react-router-dom';
function Brokerage() {
  return ( 
    <div className='container'>
      <div className="row text-center">
        <div className='col-6 fs-5'><Link to="*">Brokerage calculator</Link>
        </div>
        <div className='col-6 fs-5'>
        <Link to="*">List of charges</Link>
        </div>
      </div>
      <div className='row' style={{margin:"4% 9%"}}>
        <ul style={{color:"#666",fontSize:"0.75rem"}}>
        <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
        <li>Digital contract notes will be sent via e-mail.</li>
        <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
        <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
        <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
        <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
        </ul>
      </div>
    </div>
   );
}

export default Brokerage;