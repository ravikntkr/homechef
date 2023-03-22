import React from "react";

function Nav() {
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
        <button className="logIn">
          <i className="fa-regular fa-user btnIcon"></i> Login
        </button>
      </div>
    </nav>
  );
}

export default Nav;
