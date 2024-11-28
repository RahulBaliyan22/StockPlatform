import React from "react";
import { Link } from "react-router-dom";
function Universe() {
  return (
    <div className="container ">
      <div className=" row text-center m-5">
        <h5 style={{ margin: "10% auto" }}>
          Want to know more about our technology stack? Check out the{" "}
          <Link to="*">Zerodha.tech </Link>blog.
        </h5>
        <h1 className="p-3">The Zerodha Universe</h1>
        <h6>
          Extend your trading and investment experience even further with our
          partner platforms
        </h6>
        <div className="m-5" style={{color:"#9b9b9b", lineHeight:"18px",fontSize:"0.75rem"}}>
          <div
            className="row"
            style={{ display: "flex", alignItems: "baseline" }}
          >
            <div className="col-4 p-3">
              <div>
                <figure>
                  <img
                    src="media/zerodhaFundhouse.png"
                    alt=""
                    style={{ width: "60%",marginBottom:"3%"}}
                  />
                  <figcaption>
                    <p>
                      Our asset management venture that is creating simple and
                      transparent index funds to help you save for your goals.
                    </p>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="col-4">
              <div>
                <figure>
                  <img
                    src="media/sensibullLogo.svg"
                    alt=""
                    style={{ width: "60%",marginBottom:"8%" }}
                  />

                  <figcaption>
                    <p>
                      Options trading platform that lets you create strategies,
                      analyze positions, and examine data points like open
                      interest, FII/DII, and more.
                    </p>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="col-4">
              <div>
                <figure>
                  <img src="media/tijiro.svg" alt="" style={{ width: "40%",marginBottom:"3%" }} />

                  <figcaption>
                    <p>
                      Investment research platform that offers detailed insights
                      on stocks, sectors, supply chains, and more.
                    </p>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div className="row" style={{display:"flex", alignItems:"baseline", margin:"2% auto"}}>
            <div className="col-4">
              <div>
                <figure>
                  <img
                    src="media/streakLogo.png"
                    alt=""
                    style={{ width: "40%",marginBottom:"3%" }}
                  />

                  <figcaption>
                    <p>
                      Systematic trading platform that allows you to create and
                      backtest strategies without coding.
                    </p>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="col-4">
              <div>
                <figure>
                  <img
                    src="media/smallcaseLogo.png"
                    alt=""
                    style={{ width: "60%" ,marginBottom:"3%"}}
                  />

                  <figcaption>
                    <p>
                      Thematic investing platform that helps you invest in
                      diversified baskets of stocks on ETFs.
                    </p>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="col-4">
              <div>
                <figure>
                  <img
                    src="media/dittoLogo.png"
                    alt=""
                    style={{ width: "40%",marginBottom:"3%" }}
                  />

                  <figcaption>
                    <p>
                      Personalized advice on life and health insurance. No spam
                      and no mis-selling.
                    </p>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
        <button
          className="rounded-1 p-2 fs-5 mb-5"
          style={{
            width: "15%",
            margin: "0 auto",
            backgroundColor: "#387ed1",
            border: "1px solid rgba(0, 0, 0, 0)",
          }}
        >
          <Link to="/signup" style={{ color: "#fff" }}>
            Sign up for free
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Universe;
