import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div classNameName="App">
      <div id="preloader">
        <div className="jumper">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="index.html" className="logo">
                  {" "}
                  LBS{" "}
                </a>
                <ul className="nav">
                  <li className="scroll-to-section">
                    <a href="#welcome" className="menu-item">
                      Home
                    </a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#about" className="menu-item">
                      About
                    </a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#testimonials" className="menu-item">
                      HCM
                    </a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#contact-us" className="menu-item">
                      Contact Us
                    </a>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <div className="welcome-area" id="welcome">
        <div className="header-text">
          <div className="container">
            <div className="row">
              <div
                className="left-text col-lg-6 col-md-12 col-sm-12 col-xs-12"
                data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
              >
                <h1>
                  Learn Believe <em>Succeed</em>
                </h1>
                <p>
                  Phasellus dapibus urna vel lacus accumsan, iaculis eleifend
                  leo auctor. Duis at finibus odio. Vivamus ut pharetra arcu, in
                  porta metus. Suspendisse blandit pulvinar ligula ut elementum.
                </p>
                <a href="#about" className="main-button-slider">
                  KNOW YOUR HALL
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="section" id="about">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
              data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
            >
              <div className="features-item">
                <div className="features-icon">
                  <h2>01</h2>
                  <img src="assets/images/features-icon-1.png" alt="" />
                  <h4>Competition: Social and Cultural</h4>
                  <p>
                    Curabitur pulvinar vel odio sed sagittis. Nam maximus ex
                    diam, nec consectetur diam.
                  </p>
                  <a href="#testimonials" className="main-button">
                    {" "}
                    Discover More{" "}
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
              data-scroll-reveal="enter bottom move 30px over 0.6s after 0.4s"
            >
              <div className="features-item">
                <div className="features-icon">
                  <h2>02</h2>
                  <img src="assets/images/features-icon-2.png" alt="" />
                  <h4>Competition: Technology</h4>
                  <p>
                    Curabitur pulvinar vel odio sed sagittis. Nam maximus ex
                    diam, nec consectetur diam.
                  </p>
                  <a href="#testimonials" className="main-button">
                    {" "}
                    Discover More{" "}
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
              data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
            >
              <div className="features-item">
                <div className="features-icon">
                  <h2>03</h2>
                  <img src="assets/images/features-icon-3.png" alt="" />
                  <h4>Competition: Sports and Games</h4>
                  <p>
                    Curabitur pulvinar vel odio sed sagittis. Nam maximus ex
                    diam, nec consectetur diam.
                  </p>
                  <a href="#testimonials" className="main-button">
                    {" "}
                    Discover More{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="left-image-decor"></div>

      <section className="section" id="promotion">
        <div className="container">
          <div className="row">
            <div
              className="left-image col-lg-5 col-md-12 col-sm-12 mobile-bottom-fix-big"
              data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
            ></div>
            <div className="right-text offset-lg-1 col-lg-6 col-md-12 col-sm-12 mobile-bottom-fix">
              <ul>
                <li data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                  <img src="assets/images/about-icon-01.png" alt="" />
                  <div className="text">
                    <h4>Recent News 1</h4>
                    <p>
                      Phasellus in imperdiet felis, eget vestibulum nulla.
                      Aliquam nec dui nec augue maximus porta. Curabitur
                      tristique lacus.
                    </p>
                  </div>
                </li>
                <li data-scroll-reveal="enter right move 30px over 0.6s after 0.5s">
                  <img src="assets/images/about-icon-02.png" alt="" />
                  <div className="text">
                    <h4>Recent News 2</h4>
                    <p>
                      Phasellus in imperdiet felis, eget vestibulum nulla.
                      Aliquam nec dui nec augue maximus porta. Curabitur
                      tristique lacus.
                    </p>
                  </div>
                </li>
                <li data-scroll-reveal="enter right move 30px over 0.6s after 0.6s">
                  <img src="assets/images/about-icon-03.png" alt="" />
                  <div className="text">
                    <h4>Recent News 3</h4>
                    <p>
                      Phasellus in imperdiet felis, eget vestibulum nulla.
                      Aliquam nec dui nec augue maximus porta. Curabitur
                      tristique lacus.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="right-image-decor"></div>

      <section className="section" id="testimonials">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="center-heading">
                <h2>
                  Our Current <em>HCM</em>
                </h2>
                <p>
                  Suspendisse vitae laoreet mauris. Fusce a nisi dapibus,
                  euismod purus non, convallis odio. Donec vitae magna ornare,
                  pellentesque ex vitae, aliquet urna.
                </p>
              </div>
            </div>
            <div
              className="col-lg-10 col-md-12 col-sm-12 mobile-bottom-fix-big"
              data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
            >
              <div className="owl-carousel owl-theme">
                <div className="item service-item">
                  <div className="author">
                    <i>
                      <img
                        src="assets/images/testimonial-author-1.png"
                        alt="Author One"
                      />
                    </i>
                  </div>
                  <div className="testimonial-content">
                    <ul className="stars">
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                    <h4>Jonathan Smart</h4>
                    <p>
                      “Nullam hendrerit, elit a semper pharetra, ipsum nibh
                      tristique tortor, in tempus urna elit in mauris.”
                    </p>
                  </div>
                </div>
                <div className="item service-item">
                  <div className="author">
                    <i>
                      <img
                        src="assets/images/testimonial-author-1.png"
                        alt="Second Author"
                      />
                    </i>
                  </div>
                  <div className="testimonial-content">
                    <ul className="stars">
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                    <h4>Martino Tino</h4>
                    <p>
                      “Morbi non mi luctus felis molestie scelerisque. In ac
                      libero viverra, placerat est interdum, rhoncus leo.”
                    </p>
                  </div>
                </div>
                <div className="item service-item">
                  <div className="author">
                    <i>
                      <img
                        src="assets/images/testimonial-author-1.png"
                        alt="Author Third"
                      />
                    </i>
                  </div>
                  <div className="testimonial-content">
                    <ul className="stars">
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                    <h4>George Tasa</h4>
                    <p>
                      “Fusce rutrum in dolor sit amet lobortis. Ut at vehicula
                      justo. Donec quam dolor, congue a fringilla sed, maximus
                      et urna.”
                    </p>
                  </div>
                </div>
                <div className="item service-item">
                  <div className="author">
                    <i>
                      <img
                        src="assets/images/testimonial-author-1.png"
                        alt="Fourth Author"
                      />
                    </i>
                  </div>
                  <div className="testimonial-content">
                    <ul className="stars">
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                    <h4>Sir James</h4>
                    <p>
                      "Fusce rutrum in dolor sit amet lobortis. Ut at vehicula
                      justo. Donec quam dolor, congue a fringilla sed, maximus
                      et urna."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer id="contact-us">
        <div className="container">
          <div className="footer-content">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="contact-form">
                  <form id="contact" action="" method="post">
                    <div className="row">
                      <div className="col-md-6 col-sm-12">
                        <fieldset>
                          <input
                            name="name"
                            type="text"
                            id="name"
                            placeholder="Full Name"
                            required=""
                            style={{backgroundColor: "rgba(250, 250, 250, 0.3)"}}
                          />
                        </fieldset>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <fieldset>
                          <input
                            name="email"
                            type="text"
                            id="email"
                            placeholder="E-Mail Address"
                            required=""
                            style={{backgroundColor: "rgba(250, 250, 250, 0.3)"}}
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <textarea
                            name="message"
                            rows="6"
                            id="message"
                            placeholder="Your Message"
                            required=""
                            style={{backgroundColor: "rgba(250, 250, 250, 0.3)"}}
                          ></textarea>
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <button
                            type="submit"
                            id="form-submit"
                            className="main-button"
                          >
                            Send Message Now
                          </button>
                        </fieldset>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="right-content col-lg-6 col-md-12 col-sm-12">
                <h2>
                  Contact <em>Us!</em>
                </h2>
                <p>
                  Phasellus dapibus urna vel lacus accumsan, iaculis eleifend
                  leo auctor. Duis at finibus odio. Vivamus ut pharetra arcu, in
                  porta metus. Suspendisse blandit pulvinar ligula ut elementum.
                </p>
                <ul className="social">
                  <li>
                    <a href="https://fb.com/templatemo">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="sub-footer">
                <p>
                  Copyright &copy; 2022 LBS Official Site | All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
