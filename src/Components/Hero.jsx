import React from "react";

function Hero() {
  return (
    <main className="hero">
      <p className="heroBadge">Simply and quickly!</p>
      <h1 className="heroTitle">
        Stop waisting your <br /> <span className="titleOrange">time</span>
        while thinking <br /> what <span className="titleOrange">to cook</span>
        ...
      </h1>
      <p className="heroSubTxt">Find your perfect dish</p>
      <button className="heroButton">
        <i className="fa-solid fa-bowl-food btnIcon"></i> Search Now
      </button>
    </main>
  );
}

export default Hero;
