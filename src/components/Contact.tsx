import React from "react";

const Contact = () => {
  return (
    <section
      className="contact-section"
      id="Contact"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="container">
        <div className="contact__header">
          <p className="contact__header-subtitle">Let Connect 👨‍💻</p>
          <h2 className="contact__header-title">Connect with me</h2>
        </div>
        <div className="contact__grid">
          <div className="contact__intro-box">
            <div className="contact__image-box">
              <img
                src="assets/images/contact/contact1.png"
                alt="let connect handshake"
              />
            </div>
            <div className="contact__intro-text">
              <div
                className="contact__intro-heading"
                data-aos="zoom-in"
                data-aos-delay="300"
                data-aos-duration="1500"
              >
                <h3 className="contact__intro-heading-title">
                  Sofiyullah Abdullah
                </h3>
                <p className="contact__intro-heading-subtitle">
                  Full-Stack Software Developer | Front-End Developer | Cloud
                  Developer
                </p>
              </div>
              {/* <!-- contact intro heading ends here --> */}
              <div
                className="contact__intro-offer"
                data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-delay="350"
              >
                <p className="contact__intro-job">
                  I am open to Full-time job and Freelance work. Connect with me
                  via gmail and call in on my account.
                </p>
                <ul className="contact__intro-channel-list">
                  <li className="contact__intro-phone">
                    Phone:
                    <a href="tel: +2347066017184">+2347066017184</a>
                  </li>
                  <li className="contact__intro-email">
                    Email:
                    <a href="mailto:habsoff@gmail.com">habsoff@gmail.com</a>
                  </li>
                </ul>
              </div>
              {/* <!-- contact intro offer ends here --> */}
              <div
                className="contact find-me"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="400"
              >
                <h3 className="contact find-text">Find me with</h3>
                <ul className="contact social-icon-list">
                  <li className="social-item">
                    <a
                      href="https://web.facebook.com/profile.php?id=100065549805843"
                      className="social-link"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="social-item">
                    <a
                      href="https://wa.me/message/BRIY767QKKCIL1"
                      className="social-link"
                    >
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </li>
                  <li className="social-item">
                    <a
                      href="https://twitter.com/sofiyullah_dev"
                      className="social-link"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>

                  <li className="social-item">
                    <a
                      href="https://www.linkedin.com/in/sofiyullah-abdullah"
                      className="social-link"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- find me ends here --> */}
            </div>
          </div>
          {/* <!-- contact intro box column 1 ends here --> */}
          <div className="contact__form-box">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              className="contact__form"
            >
              <div className="form-group">
                <div className="input-group name-column">
                  <label htmlFor="yourName" className="form-label">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="yourName"
                    className="form-control"
                    name="name"
                    placeholder=" Enter Your name"
                    required
                  />
                </div>
              </div>
              <div className="input-group">
                <label htmlFor="Email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="Email"
                  className="form-control"
                  name="email"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="form-control"
                  name="subject"
                  placeholder="Tell me what's on your mind 🥰"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="message" className="form-label">
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your message"
                  className="form-control__textarea"
                  required
                ></textarea>
              </div>
              <div className="input-group">
                <div data-netlify-recaptcha="true"></div>
              </div>
              <button className="submit-btn">
                Send Message <i className="fas fa-arrow-right"></i>
              </button>
            </form>
          </div>
          {/* <!-- contact form box column two ends here --> */}
        </div>
        {/* <!-- contact grid ends here --> */}
      </div>
    </section>
  );
};

export default Contact;
