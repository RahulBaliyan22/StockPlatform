import React from "react";
function Unit({ imageURL, name, post }) {
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
          <h5>{name}</h5>
          <p>{post}</p>
          <button style={{border:"0",outline:"0"}}>
            Bio <i class="fa fa-chevron-down" aria-hidden="true"></i>
          </button>
        </figcaption>
      </figure>
    </div>
  );
}

export default Unit;
