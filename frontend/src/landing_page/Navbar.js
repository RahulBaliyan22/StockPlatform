import React from "react";
import {Link} from "react-router-dom";
function Navbar() {
  return (
    <div style={{ position: "fixed", top: "0%" , width: "100%",zIndex:"1"}}>
      <nav class="navbar navbar-expand-lg  bg-white pb-3 pt-2 border-bottom" >
        <div class="container ">
          <Link class="navbar-brand" to="/">
            <div>
              <img src='media/logo.svg' alt='' style={{width:"22%"}} />
            </div>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
           
            <form class="d-flex" role="search">
               <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/products">
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/price">
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/support">
                  Support
                </Link>
              </li>
            </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
