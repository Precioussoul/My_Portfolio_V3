import React from "react";

const Footer = () => {
  return (
    <footer
      className="footer-section"
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-delay="400"
    >
      <div className="container">
        <div className="footer__container">
          <div className="footer__logo-box">
            <a href="index.html" className="footer nav-logo">
              <div className="logo">
                <img
                  src="assets/images/logo/habsof-logo.png "
                  alt="website logo"
                  className="logo-image"
                />
              </div>
              <span>HABSOF</span>
            </a>
          </div>
          <div className="footer__copyright">
            <div className="footer__author-info">
              <h2 className="made-withLove">
                Made with{" "}
                <span className="footer-icon">
                  <i className="fas fa-heart"></i>
                </span>{" "}
                by Sofiyullah Abdullah.
              </h2>

              <p className="footer__copyright-text upt">
                This website is scheduled for regular update...
              </p>
            </div>
            <div className="footer__copyright-plane">
              <p className="footer__copyright-text">
                &copy; <span id="copyright-year"></span> HABSOF.
              </p>
              <p className="footer__copyright-text">
                &copy; Sofiyullah Abdullah (HABSOF)
              </p>
            </div>
          </div>
        </div>
        {/* <!-- footer-container --> */}
      </div>
    </footer>
  );
};

export default Footer;
