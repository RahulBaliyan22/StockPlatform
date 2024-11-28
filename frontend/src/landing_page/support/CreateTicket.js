import React from "react";
import { Link } from "react-router-dom";
function CreateTicket() {
  return (
    <div
      className="container"
      style={{ boxSizing: "border-box", marginLeft: "11%", padding: "4%" }}
    >
      <p style={{ fontSize: "1.5rem" }}>
        To create a ticket, select a relevant topic
      </p>
      <div className="row" style={{ marginTop: "5%" }}>
        <div className="col-4">
          <h5 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
            {" "}
            <Link class="ct">
              <i class="fa fa-plus-circle" aria-hidden="true"></i> Account
              Opening
            </Link>
          </h5>
          <ul
            style={{
              listStyleType: "none",
              lineHeight: "1.8rem",
              position: "relative",
              right: "15px",
              fontSize: "0.8rem",
            }}
          >
            <li>
              {" "}
              <Link>Getting started</Link>
            </li>
            <li>
              <Link>Online</Link>
            </li>
            <li>
              <Link>Offline</Link>
            </li>
            <li>
              <Link>Charges</Link>
            </li>
            <li>
              <Link>Company, Partnership and HUF</Link>
            </li>
            <li>
              <Link>Non Resident Indian (NRI)</Link>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <h5 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
            <Link class="ct">
              <i class="fa fa-user-circle" aria-hidden="true"></i> Your Zerodha
              Account
            </Link>
          </h5>
          <ul
            style={{
              listStyleType: "none",
              lineHeight: "1.8rem",
              position: "relative",
              right: "15px",
              fontSize: "0.8rem",
            }}
          >
            <li>
              <Link>Login credentials</Link>
            </li>
            <li>
              <Link>Your Profile</Link>
            </li>
            <li>
              <Link>Account modification and segment addition</Link>
            </li>
            <li>
              <Link>CMR & DP ID</Link>
            </li>
            <li>
              <Link>Nomination</Link>
            </li>
            <li>
              <Link>Transfer and conversion of shares</Link>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <h5 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
            <Link class="ct">
              {" "}
              <i class="fa fa-line-chart" aria-hidden="true"></i> Trading and
              Markets
            </Link>
          </h5>
          <ul
            style={{
              listStyleType: "none",
              lineHeight: "1.8rem",
              position: "relative",
              right: "15px",
              fontSize: "0.8rem",
            }}
          >
            <li>
              <Link>Trading FAQs</Link>
            </li>
            <li>
              <Link>Kite</Link>
            </li>
            <li>
              <Link>Margins</Link>
            </li>
            <li>
              <Link>Product and order types</Link>
            </li>
            <li>
              <Link>Corporate actions</Link>
            </li>
            <li>
              <Link>Kite features</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="row" style={{ marginTop: "1%", marginBottom: "5%" }}>
        <div className="col-4">
          <h5 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
            <Link class="ct">
              {" "}
              <i class="fa fa-credit-card" aria-hidden="true"></i> Funds
            </Link>
          </h5>
          <ul
            style={{
              listStyleType: "none",
              lineHeight: "1.8rem",
              position: "relative",
              right: "15px",
              fontSize: "0.8rem",
            }}
          >
            <li>
              <Link>Fund withdrawal</Link>
            </li>
            <li>
              <Link>Adding funds</Link>
            </li>
            <li>
              <Link>Adding bank accounts</Link>
            </li>
            <li>
              <Link>Charges</Link>
            </li>
            <li>
              <Link>eMandates</Link>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <h5 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
            <Link class="ct">
              {" "}
              <i class="fa fa-circle-o-notch" aria-hidden="true"></i> Console
            </Link>
          </h5>
          <ul
            style={{
              listStyleType: "none",
              lineHeight: "1.8rem",
              position: "relative",
              right: "15px",
              fontSize: "0.8rem",
            }}
          >
            <li>
              <Link>IPO</Link>
            </li>
            <li>
              <Link>Portfolio</Link>
            </li>
            <li>
              <Link>Funds statement</Link>
            </li>
            <li>
              <Link>Profile</Link>
            </li>
            <li>
              <Link>Reports</Link>
            </li>
            <li>
              <Link>Referral program</Link>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <h5 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
            <Link class="ct">
              <i class="fa fa-superpowers" aria-hidden="true"></i> Coin
            </Link>
          </h5>
          <ul
            style={{
              listStyleType: "none",
              lineHeight: "1.8rem",
              position: "relative",
              right: "15px",
              fontSize: "0.8rem",
            }}
          >
            <li>
              <Link>Understanding mutual funds and Coin</Link>
            </li>
            <li>
              <Link>Coin app</Link>
            </li>
            <li>
              <Link>Coin web</Link>
            </li>
            <li>
              <Link>Charges</Link>
            </li>
            <li>
              <Link>Transactions and reports</Link>
            </li>
            <li>
              <Link>National Pension Scheme (NPS)</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
