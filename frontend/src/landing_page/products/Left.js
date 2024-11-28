import React from 'react';
import {Link} from 'react-router-dom';
function Left({imageURL,productNAME,productDISCRIPTION,tryDEMO,learnMORE,googlePLAY,appSTORE}) {
  return ( 
   
    <div className='container' style={{margin:"5% auto"}}>
      <div className='row'>
        <div className='col-6' style={{padding:"0px 5%"}}>
          <img src={imageURL} alt=''/>
        </div>
        <div className='col-6' style={{display:"flex",alignItems:"center"}}>
          <div style={{padding:"0px 20%"}}>
          <h2>{productNAME}</h2>
          <p >{productDISCRIPTION}</p>
          <Link to={tryDEMO} style={{marginRight:"10%"}}>Try demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
          <Link to={learnMORE}>Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
          <br/>
          <br/>
          <Link to={googlePLAY} style={{marginRight:"3%"}}><img src='media/googlePlayBadge.svg' alt='' /></Link>
          <Link to={appSTORE}><img src='media/appstoreBadge.svg' alt=''/></Link>
          </div>
        </div>
      </div>
    </div>
   );
}

export default Left;