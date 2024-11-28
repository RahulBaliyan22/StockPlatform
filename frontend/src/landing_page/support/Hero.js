import React from "react";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div style={{ marginTop: "4%" ,backgroundColor:"#387ED1"}}>
      <div className="container" style={{ padding: "1%" }}>
        <div className="row" style={{ position: "relative", left: "7%" }}>
          <div class="support">
            <h5>
              <Link style={{ color: "white" }}>Support Portal</Link>
            </h5>
            <Link
              style={{
                color: "white",
                position: "relative",
                left: "70%",
                borderBottom: "2px solid white",
                padding: "4px 0px 0px 0px",
              }}
            >
              Track tickets
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-7" style={{ padding: "4%", marginLeft: "4%" }}>
            <div style={{ color: "white", fontSize: "1.5rem" }}>
              Search for an answer or browse help topics to create a <br />
              ticket
            </div>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "3px",
                padding: "3% 0px",
                margin: "2% auto",
              }}
            >
              <input
                class="input"
                type="text"
                placeholder="Eg:how do i activate F&O, why is my order getting rejected..."
                style={{ width: "90%", marginLeft: "2%" }}
              />
              <span>
                <button
                  class="submit"
                  type="submit"
                  style={{
                    border: "0",
                    outline: "none",
                    backgroundColor: "white",
                  }}
                >
                  <i class="fa fa-search" aria-hidden="true"></i>
                </button>
              </span>
            </div>
            <div>
              <div class="grid" style={{ marginBottom: "2%" }}>
                <Link class="link">Track account opening</Link>
                <Link class="link">Track segment activation</Link>
                <Link class="link">Intraday margins</Link>
              </div>
              <Link class="link">Kite user manual</Link>
            </div>
          </div>
          <div className="col" style={{ color: "white" }}>
            <div style={{ position: "relative", top: "30%" }}>
              <h4>Featured</h4>
              <ol>
                <li style={{ marginBottom: "8%" }}>
                  <Link style={{ color: "white", textDecoration: "underline" }}>
                    Current Buybacks - August 2024
                  </Link>
                </li>
                <li>
                  <Link style={{ color: "white", textDecoration: "underline" }}>
                    Offer for sale (OFS) - August 2024
                  </Link>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
