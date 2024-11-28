import React from 'react';
import Hero from './Hero';
import Left from './Left';
import Right from './Right';
import Universe from './Universe';
function PricingPage() {
  return ( 
    <>
      <Hero />
      
      <Left 
        imageURL="media/kite.png"
        productNAME="Kite"
        productDISCRIPTION="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDEMO=""
        learnMORE=""
        googlePLAY=""
        appSTORE=""
      />
      <Right 
        imageURL="media/console.png"
        productNAME="Console"
        productDISCRIPTION="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        learnMORE=""
      />
      <Left 
        imageURL="media/coin.png"
        productNAME="Coin"
        productDISCRIPTION="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDEMO=""
        learnMORE=""
        googlePLAY=""
        appSTORE=""
      />
      <Right 
        imageURL="media/kiteconnect.png"
        productNAME="Kite Connect API"
        productDISCRIPTION="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        learnMORE=""
      />
      <Left 
        imageURL="media/varsity.png"
        productNAME="Varsity mobile"
        productDISCRIPTION="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDEMO=""
        learnMORE=""
        googlePLAY=""
        appSTORE=""
      />
      <Universe />
    </>
   );
}

export default PricingPage;