import React from "react";
import Unit from "./Unit";

function Team() {
  return (
    <div className="container">
      <div className="row" style={{ marginBottom: "10%" }}>
        <h2 className="text-center">People</h2>

        <div className="col-5 mb-5 mt-5 ">
          <figure style={{ position: "relative", left: "30%" }}>
            <img
              src="media/nithinKamath.jpg"
              alt=""
              style={{
                borderRadius: "50%",
                width: "70%",
                marginBottom: "10px",
              }}
            />
            <figcaption style={{ position: "absolute", left: "20%" }}>
              <h5>Nithin Kamath</h5>
              <p className="text-center">Founder, CEO</p>
            </figcaption>
          </figure>
        </div>
        <div className="col-7" style={{ padding: "0px 5%" }}>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          .
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on Homepage / TradingQnA / Twitter</p>
        </div>
      </div>
      <div className="row">
        <div class="gridTeam">
          <Unit
            imageURL="media/Nikhil.jpg"
            name="Nikhil Kamath"
            post="Co-founder & CFO"
          />
          <Unit imageURL="media/Kailash.jpg" name="Kailash Nadh" post="CTO" />
          <Unit imageURL="media/Venu.jpg" name="Venu Madhav" post="COO" />

          <Unit imageURL="media/Hanan.jpg" name="Hanan Delvi" post="CCO" />
          <Unit imageURL="media/Seema.jpg" name="Seema Patil" post="Director" />
          <Unit
            imageURL="media/karthik.jpg"
            name="Karthik Rangappa"
            post="Chief of Education"
          />
          <Unit
            imageURL="media/Austin.jpg"
            name="Austin Prakesha"
            post="Director Strategy"
          />
        </div>
      </div>
    </div>
  );
}

export default Team;
