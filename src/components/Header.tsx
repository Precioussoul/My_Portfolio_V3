"use client";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [desktopNav, setDesktopNav] = useState(true);

  const openMobileNav = () => {
    setDesktopNav(false);
  };
  const closeMobileNav = () => {
    setDesktopNav(!desktopNav);
  };

  // Get the container element
  useEffect(() => {
    var naavy = window.document.querySelectorAll(".nav-link");
    var naavyMobile = window.document.querySelectorAll(
      ".mobile-menu__nav-link"
    );
    var length = naavy.length;
    var lengthMobile = naavyMobile.length;

    function highlight(element: any) {
      for (var i = 0; i < length; i++) {
        naavy[i].classList.remove("active");
      }

      element.classList.add("active");
    }

    function highlightMobile(element: any) {
      for (var i = 0; i < length; i++) {
        naavyMobile[i].classList.remove("active");
      }

      element.classList.add("active");
    }

    for (var i = 0; i < length; i++) {
      naavy[i].addEventListener("click", function () {
        // @ts-ignore
        highlight(this);
      });
    }
    for (var i = 0; i < lengthMobile; i++) {
      naavyMobile[i].addEventListener("click", function () {
        //@ts-ignore
        highlightMobile(this);
      });
    }
  }, []);

  return (
    <>
      {desktopNav ? (
        <header id="header" className="main_header">
          <div className="container">
            <nav className="navbar desktop-menu">
              <a href="index.html" className="nav-logo">
                <div className="logo">
                  <img
                    src="assets/images/logo/habsof-logo.png "
                    alt="website logo"
                    className="logo-image"
                  />
                </div>
                <span>HABSOF</span>
              </a>
              <button className="hamburger-menu" onClick={openMobileNav}>
                <i className="fas fa-bars"></i>
              </button>
              <ul className="nav-list">
                <li className="nav-item">
                  <a href="#Home" className="nav-link active">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#features" className="nav-link features__link">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#Resumee" className="nav-link">
                    Resume
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#Portfolio" className="nav-link">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#Testimonial" className="nav-link">
                    Testimonial
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#Blog" className="nav-link">
                    Blog
                  </a>
                </li>
              </ul>
              <a href="#Contact" className="btn-secondary contact-me">
                Contact Me
              </a>
            </nav>
          </div>
        </header>
      ) : (
        <div className="mobile-navigation" onClick={closeMobileNav}>
          <nav className="mobile-menu-popup">
            <div className="menu-top">
              <div className="mobile-menu__intro">
                <div className="nav-logo">
                  <div className="logo">
                    <img
                      src="assets/images/logo/habsof-logo.png "
                      alt="website logo"
                      className="logo-image"
                    />
                  </div>
                  <span>HABSOF</span>
                </div>
                <button className="close-btn" onClick={closeMobileNav}>
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="mobile-menu__intro-details">
                <h3 className="mobile-menu__author-name">
                  Hi, i'm
                  <span className="name-highlight pka-line">
                    {" "}
                    Sofiyullah Abdullah
                  </span>
                </h3>
                <div className="mobile-menu__author-title">
                  <h1>A</h1>
                  <h1 className="typing-text"></h1>
                </div>
                <p className="mobile-menu__author-summary">
                  I am a software engineer specialized and focused on building
                  Pixel-Perfect Frontend, simple and complex backend and
                  provision cloud-based solutions to deliver excellence digital
                  product.
                </p>
              </div>
            </div>

            <ul className="mobile-menu__nav-list">
              <li className="mobile-menu__nav-item">
                <a href="#Home" className="mobile-menu__nav-link active">
                  Home
                </a>
              </li>
              <li className="mobile-menu__nav-item">
                <a href="#features" className="mobile-menu__nav-link">
                  Features
                </a>
              </li>
              <li className="mobile-menu__nav-item">
                <a href="#Resumee" className="mobile-menu__nav-link">
                  Resume
                </a>
              </li>
              <li className="mobile-menu__nav-item">
                <a href="#Portfolio" className="mobile-menu__nav-link">
                  Portfolio
                </a>
              </li>
              <li className="mobile-menu__nav-item">
                <a href="#Testimonial" className="mobile-menu__nav-link">
                  Testimonial
                </a>
              </li>
              <li className="mobile-menu__nav-item">
                <a href="#Blog" className="mobile-menu__nav-link">
                  Blog
                </a>
              </li>
              <li className="mobile-menu__nav-item">
                <a href="#Contact" className="mobile-menu__nav-link">
                  Contact
                </a>
              </li>
            </ul>
            <div className="mobile-menu find-me">
              <h3 className="mobile-menu find-text">Find me with</h3>
              <ul className="mobile-menu social-icon-list">
                <li className="mobile-menu social-item">
                  <a
                    href="https://web.facebook.com/profile.php?id=100065549805843"
                    className="social-link"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="mobile-menu social-item">
                  <a
                    href="https://wa.me/message/BRIY767QKKCIL1"
                    className="social-link"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </li>

                <li className="mobile-menu social-item">
                  <a
                    href="https://www.linkedin.com/in/sofiyullah-abdullah"
                    className="social-link"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      )}

      {/* mobile navigation */}
    </>
  );
};

export default Header;
