import React from "react";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="container text-center" style={{ margin: "12% auto 0%" }}>
      <div style={{ marginBottom:"9%" }}>
        <h1>Technology</h1>
        <h5>Sleek, modern, and intuitive trading platforms</h5>
        <h6 className="pt-3">
          Check out our{" "}
          <Link to="*">
            investment offerings{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </Link>
        </h6>
      </div>
      <div>
        <hr/>
     </div>
    </div>
     
  );
}

export default Hero;
