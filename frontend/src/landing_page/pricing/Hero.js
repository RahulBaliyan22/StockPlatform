import React from 'react';
function Hero() {
  return ( 
    <div className="container" style={{marginTop: "9%"}}>
      <div className="row text-center"style={{marginBottom: "9%"}}>
        <h1 >Pricing</h1>
        <p className='fs-5'style={{marginBottom: "9%"}}>Free equity investments and flat ₹20 intraday and F&O trades</p>
        <hr/>
      </div>
      <div className='row'>
        <div className='col-4 text-center'>
          <figure>
          <img src="media/pricing0.svg" style={{width:"60%"}}/>
            <figcaption>
              <h2>Free equity delivery</h2>
              <p style={{color:"#666"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </figcaption>
          </figure>
        </div>
        <div  className='col-4 text-center'>
          <figure>
        <img src="media/pricing20.svg" style={{width:"60%"}}/>

            <figcaption>
              <h2>Intraday and F&O trades</h2>
              <p style={{color:"#666"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </figcaption>
          </figure>
        </div>
        <div className='col-4 text-center'>
          <figure >
          <img src="media/pricing0.svg" style={{width:"60%"}}/>
            <figcaption>
              <h2>Free direct MF</h2>
              <p style={{color:"#666"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
   );
}

export default Hero;