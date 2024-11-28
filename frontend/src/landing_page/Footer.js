import React from "react";
function Footer() {
  return (
    <div
      className="container border-top"
      style={{ backgroundColor: "#FBFBFB", fontSize: "65%", padding: "0% 13%" }}
    >
      <div className="row mt-5">
        <div className="col-3">
          <a class="navbar-brand " href="/">
            <div className="mb-3">
              <img
                src="media/logo.svg"
                alt=""
                style={{ width: "50%", position: "relative", right: "7%" }}
              />
            </div>
          </a>
          <p style={{ fontSize: "110%" }}>
            <i class="fa fa-copyright" aria-hidden="true"></i> 2010 - 2024,
            Zerodha Broking Ltd.
            <br />
            All rights reserved.
          </p>
          <div class="icons"></div>
        </div>
        <div className="col-3">
          <h5>Company</h5>
          <ul class = "add" style={{
              listStyleType: "none",
              position: "relative",
              right: "13%"
            }}
          >
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Products</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Referral programme</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
            <li>
              <a href="/">Zerodha.tech</a>
            </li>
            <li>
              <a href="/">Press & media</a>
            </li>
            <li>
              <a href="/">Zerodha Cares (CSR)</a>
            </li>
          </ul>
        </div>
        <div className="col-3">
          <h5>Support</h5>
          <ul class = "add" style={{ listStyleType: "none",
              position: "relative",
              right: "13%" }}>
            <li>
              <a href="/">Contact us</a>
            </li>
            <li>
              <a href="/">Support portal</a>
            </li>
            <li>
              <a href="/">Z-Connect blog</a>
            </li>
            <li>
              <a href="/">List of charges</a>
            </li>
            <li>
              <a href="/">Downloads & resources</a>
            </li>
            <li>
              <a href="/">Videos</a>
            </li>
            <li>
              <a href="/">Market overview</a>
            </li>
            <li>
              <a href="/">How to file a complaint?</a>
            </li>
            <li>
              <a href="/">Status of your complaints</a>
            </li>
          </ul>
        </div>
        <div className="col-3">
          <h5> Account</h5>
          <ul class = "add" style={{ listStyleType: "none",
              position: "relative",
              right: "13%" }}>
            <li>
              <a href="/">Open an account</a>
            </li>
            <li>
              <a href="/">Fund transfer</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row" style={{ fontWeight: "55%", color: "#9B9B9B" }}>
        <p>
          Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
          no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
          Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading
          through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI
          Registration no.: INZ000038238 Registered Address: Zerodha Broking
          Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
          School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For
          any complaints pertaining to securities broking please write to
          complaints@zerodha.com, for DP related to dp@zerodha.com. Please
          ensure you carefully read the Risk Disclosure Document as prescribed
          by SEBI | ICF
        </p>
        <p>
          Procedure to file a complaint on SEBI SCORES: Register on SCORES
          portal. Mandatory details for filing complaints on SCORES: Name, PAN,
          Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
          Speedy redressal of the grievances
        </p>
        <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>
        <p>
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>
        <p>
          Attention investors: 1) Stock brokers can accept securities as margins
          from clients only by way of pledge in the depository system w.e.f
          September 01, 2020. 2) Update your e-mail and phone number with your
          stock broker / depository participant and receive OTP directly from
          depository on your e-mail and/or mobile number to create pledge. 3)
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month.
        </p>
        <p>
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors. KYC is one time exercise
          while dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another
          intermediary." Dear Investor, if you are subscribing to an IPO, there
          is no need to issue a cheque. Please write the Bank account number and
          sign the IPO application form to authorize your bank to make payment
          in case of allotment. In case of non allotment the funds will remain
          in your bank account. As a business we don't give stock tips, and have
          not authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of Zerodha and offering such services, please
          create a ticket here.
        </p>
      </div>
      <div className="row">
        <div class="contact">
          <a href="/" style={{ textDecoration: "none" }}>
            NSE
          </a>
          <a href="/" style={{ textDecoration: "none" }}>
            BSE
          </a>
          <a href="/" style={{ textDecoration: "none" }}>
            MCX
          </a>
          <a href="/" style={{ textDecoration: "none" }}>
            Terms & conditions
          </a>
          <a href="/" style={{ textDecoration: "none" }}>
            Policies & procedures
          </a>
          <a href="/" style={{ textDecoration: "none" }}>
            Privacy Policy
          </a>
          <a href="/" style={{ textDecoration: "none" }}>
            Disclosure
          </a>
          <a href="/" style={{ textDecoration: "none" }}>
            For investor's attention
          </a>
          <a href="/" style={{ textDecoration: "none" }}>
            Investor charter
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
