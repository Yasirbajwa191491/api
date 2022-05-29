import React from "react";
import pic1 from "./images/pic1.jpg";
import pic2 from "./images/pic2.jpg";
import pic3 from "./images/pic3.jpg";
import pic4 from "./images/pic4.jpg";
import pic5 from "./images/pic5.png";
import pic6 from "./images/pic6.png";
import pic7 from "./images/Screenshot.png";
import pic8 from "./images/Screenshot1.png";
import pic9 from "./images/Screenshot2.png";
import "./project.css";
const Portfolio = () => {
  return (
    <>
      <div className="container">
        <div className="">
          <h1 style={{ color: "#696969", marginTop: "20px" }}>Yasir Sohail</h1>
          <p style={{ color: "#696969" }}>
            React JS Developer | MERN Stack Developer
          </p>
          <hr />
          <p style={{ color: "#696969" }}>
            I have created different projects of React js with backend as well
            with the help of Node js, Express js and MongoDB like WhatsApp
            clone, Facebook clone, Netflix clone, Weather websites with restful Api's, Todo
            App, Notepad App and different portfolio websites. I have completed
            my 6th months internship in IT service of Goverment College
            University Faisalabad. I have completed my 3 months internship in
            React Native as well.
          </p>
          <p style={{ color: "#696969" }}>
            Here is Github Link of all source codes:
          </p>
          <p style={{ color: "#696969", cursor: "pointer" }} className="px-5">
            https://github.com/Yasirsoha
          </p>
          <div class="container">
            <div class="row portfolio-images">
              <div class="col-sm img-ovelay p-btn--1">
                <img
                  src={pic1}
                  loading="lazy"
                  alt="portfolio images "
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                />
                <div className="overlay">
                  <a href="#" target="_blank" className="common-heading">
                    Project 1
                  </a>
                </div>
              </div>
              <div class="col-sm img-ovelay p-btn--3">
                <img
                  src={pic2}
                  loading="lazy"
                  alt="portfolio images "
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                />
                <div className="overlay">
                  <a href="#" target="_blank" className="common-heading">
                    Project 2
                  </a>
                </div>
              </div>
              <div class="col-sm img-ovelay p-btn--1">
                <img
                  src={pic3}
                  loading="lazy"
                  alt="portfolio images "
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                />
                <div className="overlay">
                  <a href="#" target="_blank" className="common-heading">
                    Project 3
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row portfolio-images">
              <div class="col-sm img-ovelay p-btn--1">
                <img
                  src={pic4}
                  loading="lazy"
                  alt="portfolio images "
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                />
                <div className="overlay">
                  <a href="#" target="_blank" className="common-heading">
                    Project 4
                  </a>
                </div>
              </div>
              <div class="col-sm img-ovelay p-btn--3">
                <img
                  src={pic5}
                  loading="lazy"
                  alt="portfolio images "
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                />
                <div className="overlay">
                  <a href="#" target="_blank" className="common-heading">
                    Project 5
                  </a>
                </div>
              </div>
              <div class="col-sm img-ovelay p-btn--1">
                <img
                  src={pic6}
                  loading="lazy"
                  alt="portfolio images "
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                />
                <div className="overlay">
                  <a href="#" target="_blank" className="common-heading">
                    Project 6
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row portfolio-images">
              <div class="col-sm img-ovelay p-btn--1">
                <img
                  src={pic7}
                  loading="lazy"
                  alt="portfolio images "
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                />
                <div className="overlay">
                  <a href="#" target="_blank" className="common-heading">
                    Project 7
                  </a>
                </div>
              </div>
              <div class="col-sm img-ovelay p-btn--3">
                <img
                  src={pic8}
                  loading="lazy"
                  alt="portfolio images "
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                />
                <div className="overlay">
                  <a href="#" target="_blank" className="common-heading">
                    Project 8
                  </a>
                </div>
              </div>
              <div class="col-sm img-ovelay p-btn--1">
                <img
                  src={pic9}
                  loading="lazy"
                  alt="portfolio images "
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                />
                <div className="overlay">
                  <a href="#" target="_blank" className="common-heading">
                    Project 9
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
