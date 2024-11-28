import React from "react";
function Profile({imageURL,NAME,positionNAME}) {
  return (
    <div>
      <figure style={{ textAlign: "center" }}>
        <img
          src={imageURL}
          alt=""
          style={{
            borderRadius: "50%",
            width: "65%",
            marginBottom: "5%",
          }}
        />
        <figcaption style={{ textAlign: "center" }}>
          <h5>{NAME}</h5>
          <p>{positionNAME}</p>
          <button style={{ border: "0", outline: "0" }}>
            Bio <i class="fa fa-chevron-down" aria-hidden="true"></i>
          </button>
        </figcaption>
      </figure>
    </div>
  );
}
export default Profile;
