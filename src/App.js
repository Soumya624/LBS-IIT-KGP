import React, { useEffect } from "react";
import logo from "./logo.svg";
import lbs_logo from "./logo.png";
import home_image from "./Home_1.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function App() {
  useEffect(() => {
    if(window.innerWidth>900){
    document.querySelector(
      "#container"
    ).style.backgroundImage = `url(${home_image})`;
    document.querySelector("#container").style.backgroundSize = "cover";
    document.querySelector("#container").style.backgroundPosition = "center";
    document.querySelector("#container").style.backgroundRepeat = "no-repeat";}
  }, []);
  return (
    <div classNameName="App">
      <div id="preloader">
        <div className="jumper">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <header
        className="header-area header-sticky"
        style={{ backgroundColor: "none" }}
      >
        <div className="container" style={{ backgroundColor: "none"}}>
          <div className="row" style={{ display: "flex" }}>
            <div className="col-12">
              <nav className="main-nav" style={{ backgroundColor: "none", alignItems:"center" }}>
                <a
                  href="index.html"
                  className="logo"
                  style={{ alignItems: "center", display: "flex" }}
                >
                  {" "}
                  <img src={lbs_logo} alt="Logo" style={{ width: "30%" , marginTop: window.innerWidth > 900 ? "1%" : "4%"}} />
                </a>
                <ul
                  className="nav"
                  style={{
                    alignItems: "center",
                    backgroundColor: "none",
                    display: window.innerWidth > 900 ? "flex" : "none"
                  }}
                >
                  
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
        <div className="header-text" id="container">
          <div className="container">
            <div className="row" id="homeimg">
              <div
                className="left-text col-lg-6 col-md-12 col-sm-12 col-xs-12"
                data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
              >
                <h1>
                  Learn Believe <em>Succeed</em>
                </h1>
                <p
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                >
                  Lal Bahadur Shastri Hall Of Residence is one of the 21 halls
                  of residence at IIT Kharagpur established in 2011 with the
                  motto: "Learn, Believe, Succeed." The boarders, proudly known
                  as 'Shastrians' comprises of undergraduate & postgraduate
                  students
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
                  <h4>General Championship: Social and Cultural</h4>
                  {/* <p>
                    Curabitur pulvinar vel odio sed sagittis. Nam maximus ex
                    diam, nec consectetur diam.
                  </p> */}
                  <a
                    href="https://wiki.metakgp.org/w/Lal_Bahadur_Shastri_Hall_of_Residence#General_championship"
                    target="_blank"
                    className="main-button"
                  >
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
                  <h4>General Championship: Technology</h4>
                  {/* <p>
                    Curabitur pulvinar vel odio sed sagittis. Nam maximus ex
                    diam, nec consectetur diam.
                  </p> */}
                  <a
                    href="https://wiki.metakgp.org/w/Lal_Bahadur_Shastri_Hall_of_Residence#General_championship"
                    target="_blank"
                    className="main-button"
                  >
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
                  <h4>General Championship: Sports and Games</h4>
                  {/* <p>
                    Curabitur pulvinar vel odio sed sagittis. Nam maximus ex
                    diam, nec consectetur diam.
                  </p> */}
                  <a
                    href="https://wiki.metakgp.org/w/Lal_Bahadur_Shastri_Hall_of_Residence#General_championship"
                    target="_blank"
                    className="main-button"
                  >
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
                    <h4>Interwing Gully Cricket</h4>
                    <p>
                      26th February 2022 to 28th February 2022 at AB Ground of
                      Lal Bahadur Shastri Hall Of Residence
                    </p>
                  </div>
                </li>
                <li data-scroll-reveal="enter right move 30px over 0.6s after 0.5s">
                  <img src="assets/images/about-icon-02.png" alt="" />
                  <div className="text">
                    <h4>Intrahall Tournament</h4>
                    <p>
                      22nd January 2022 on Futsal, Online Chess, Table Tennis
                      and Slow Cycling
                    </p>
                  </div>
                </li>
                <li data-scroll-reveal="enter right move 30px over 0.6s after 0.6s">
                  <img src="assets/images/about-icon-03.png" alt="" />
                  <div className="text">
                    <h4>Intrahall Volleyball Tournament</h4>
                    <p>
                      22nd November 2021 to 23rd November 2021 at Volleyball
                      Ground of Lal Bahadur Shastri Hall of Residence
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
                {/* <p>
                  Suspendisse vitae laoreet mauris. Fusce a nisi dapibus,
                  euismod purus non, convallis odio. Donec vitae magna ornare,
                  pellentesque ex vitae, aliquet urna.
                </p> */}
              </div>
            </div>
            <div
              className="col-lg-10 col-md-12 col-sm-12 mobile-bottom-fix-big"
              data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
            >
              <div className="owl-theme">
                <Carousel responsive={responsive}>
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
                      <h4>Kshitij Prasad</h4>
                      <p>Hall President (2021-2022)</p>
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
                      <h4>Nitin Kohli</h4>
                      <p>Second Senate Member (2021-2022)</p>
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
                      <h4>Swagata Naskar</h4>
                      <p>General Secretary Sports and Games (2021-2022)</p>
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
                      <h4>Chinmay Jain</h4>
                      <p>General Secretary Technology (2021-2022)</p>
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
                      <h4>Sreyash Layek</h4>
                      <p>General Secretary Social and Cultural (2021-2022)</p>
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
                      <h4>Soumya Tarafder</h4>
                      <p>General Secretary Alumni Affairs (2021-2022)</p>
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
                      <h4>Shubham Agarwal</h4>
                      <p>General Secretary Maintenance (2021-2022)</p>
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
                      <h4>Palkit Lohia</h4>
                      <p>General Secretary Student's Welfare (2021-2022)</p>
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
                      <h4>Aditya Chawala</h4>
                      <p>General Secretary Mess (2021-2022)</p>
                    </div>
                  </div>
                </Carousel>
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
                            style={{
                              backgroundColor: "rgba(250, 250, 250, 0.3)",
                            }}
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
                            style={{
                              backgroundColor: "rgba(250, 250, 250, 0.3)",
                            }}
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
                            style={{
                              backgroundColor: "rgba(250, 250, 250, 0.3)",
                            }}
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
                <p style={{ textTransform: "capitalize" }}>
                  Lal Bahadur Shastri Hall Of Residence is one of the 21 halls
                  of residence at IIT Kharagpur established in 2011 with the
                  motto: "Learn, Believe, Succeed." The boarders, proudly known
                  as 'Shastrians' comprises of undergraduate & postgraduate
                  students
                </p>
                <ul className="social">
                  <li>
                    <a
                      href="https://m.facebook.com/profile.php?id=196194040504547"
                      target="_blank"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.linkedin.com/company/lbsiitkgp/mycompany/"
                      target="_blank"
                    >
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
