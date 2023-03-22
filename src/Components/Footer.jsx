import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <footer>
          <div className="footerLeft">
            <p className="author">
              Made By{" "}
              <a
                href="https://www.linkedin.com/in/ravikantkr/ "
                target="_blank"
              >
                Ravikant K.
              </a>{" "}
            </p>
          </div>
          {/* Social Icon */}
          <div className="footerRight">
            <div className="socialIcons">
              <i className="fa-brands fa-facebook-f footerIcon"></i>
            </div>
            <div className="socialIcons">
              <i className="fa-brands fa-instagram footerIcon"></i>
            </div>
            <div className="socialIcons">
              <i className="fa-brands fa-twitter footerIcon"></i>
            </div>
            <div className="socialIcons">
              <i className="fa-brands fa-linkedin-in footerIcon"></i>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
