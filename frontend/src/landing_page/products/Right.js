import React from "react";
import { Link } from "react-router-dom";
function Right({ imageURL, productNAME, productDISCRIPTION, learnMORE }) {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-6"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div  style={{padding:"0px 20%"}}>
            <h2>{productNAME}</h2>
            <p >{productDISCRIPTION}</p>
            <Link to={learnMORE} style={{marginRight:"3%"}}>
              Learn more{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
        <div className="col-6 " style={{position:"relative",right:"4%"}}>
          <img src={imageURL} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Right;
