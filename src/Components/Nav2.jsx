import React from "react";

function Nav2() {
  return (
    <nav className="navContainer">
      {/* Logo */}
      <div className="logoBox">
        <a href="/" className="logoLink">
          <h1 className="logo">
            <i className="fa-solid fa-utensils"></i> HOME.CHEF
          </h1>
        </a>
      </div>
      {/* Head Button */}
      <div className="buttonBox">
        <a href="/">
          <button className="signUp" type="button" href="/">
            <i className="fa-solid fa-arrow-left-long btnIcon"></i> Back
          </button>
        </a>
      </div>
    </nav>
  );
}

export default Nav2;
