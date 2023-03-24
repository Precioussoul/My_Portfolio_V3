import React from "react";

const HeroSection = () => {
  return (
    <section
      className="hero-section"
      id="Home"
      data-aos="fade-down"
      data-aos-anchor-placement="top-center"
      data-aos-duration="2000"
    >
      <div className="container">
        <div className="hero__grid">
          <div className="hero__text">
            <div
              className="hero__author-intro"
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-duration="1500"
              data-aos-easing="ease-in-sine"
            >
              <p className="padding-20 welcome-title">Welcome to my World</p>
              <h1 className="padding-20 hero__author-name">
                Hi, I'm
                <span className="highlighted" style={{ display: "block" }}>
                  Sofiyullah Abdullah
                </span>
              </h1>
              <div className="padding-20 hero__author-title">
                <h1>A</h1>
                <h1 className="typing-text"></h1>
              </div>
              <p className="padding-20 hero__author-summary">
                I am a software engineer specializing and focusing on building
                pixel-perfect websites, web-apps, mobile-apps and provisioning
                cloud-based solutions to deliver excellence digital product that
                match requirements.
              </p>
            </div>
            <div
              className="hero__author-contact"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-duration="1500"
              data-aos-easing="ease-in-sine"
            >
              <div className="hero__author-social-contact">
                <h3 className="hero__author-find-me">Find me with</h3>
                <ul className="hero__social-icon-list">
                  <li className="hero__social-item">
                    <a
                      href="https://www.linkedin.com/in/sofiyullah-abdullah"
                      className="social-link"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li className="hero__social-item">
                    <a
                      href="https://twitter.com/sofiyullah_dev"
                      className="social-link"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="hero__social-item">
                    <a
                      href="https://github.com/Precioussoul"
                      className="social-link"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="hero__author-skill">
                <h3 className="hero__author-skill-text">Best skill on</h3>
                <ul className="skill-list">
                  <li className="skill-item">
                    <img src="assets/images/icons/icons-16.png" alt="HTML" />
                  </li>
                  <li className="skill-item">
                    <img src="assets/images/icons/node-js.png" alt="React" />
                  </li>
                  <li className="skill-item">
                    <img src="assets/images/icons/aws-2.svg" alt="WordPress" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="hero__main-image"
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1500"
          >
            <div className="hero__image-box">
              <img
                src="assets/images/author/My_Image_Protrait_smile.png"
                alt="Habsof the Developer"
                className="hero__image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
