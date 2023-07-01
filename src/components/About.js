import React from "react";
import "./css/style.css";
import "./css/style.min.css";
import OwlCarousel from "react-owl-carousel";
import { Carousel } from "react-bootstrap";
import "./lib/owlcarousel/assets/owl.carousel.min.css";
import "./lib/lightbox/css/lightbox.min.css";
import Navbar from "./Navbar";
import Topbar from "./Topbar";
import {Link} from "react-router-dom";
function handleClick() {
  window.location.href = "/about.js";
}
function About() {
  return (
    //Main div
    <div>
        {/* Header */}
    <div className="jumbotron jumbotron-fluid page-header" style={{'marginTop': '20px'}}>
        <div className="container text-center py-5">
            <h1 className="text-white display-3 mt-lg-5">About</h1>
            <div className="d-inline-flex align-items-center text-white">
                <p className="m-0"><Link className="text-white" to="/Homepage">Home</Link></p>
                <i className="fa fa-circle px-3"></i>
                <p className="m-0">About</p>
            </div>
        </div>
    </div>
   {/* About Start */}
   <div className="container-fluid py-2">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <h1 className="section-title position-relative text-center mb-5">
                Traditional & Delicious Ice Cream Since 1950
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 py-5">
              <h4 className="font-weight-bold mb-3">About Us</h4>
              <h5 className="text-muted mb-3">
                The journey of iCream began on the 10th March, 2018 in Mumbai
                and with its superior quality it was able to capture the highest
                market share in a short period of time.
              </h5>
              <p>
                iCream has always brought newness in its products and the same
                applies for its ice creams. Not only has it grown at a
                phenomenal rate but also it has added a vast variety of flavours
                to its ever growing range. Currently it offers a selection of
                220 products.
              </p>
              <p>
                In January 2022, iCream introduced Sugar Free & ProLife
                Probiotic Wellness Ice Cream, which was first-of-its-kind in
                India for the health conscious.
              </p>
            </div>
            <div className="col-lg-4" style={{ minHeight: "400px" }}>
              <div className="position-relative h-100 rounded overflow-hidden">
                <img
                  className="position-absolute w-100 h-100"
                  src="img/about.jpg"
                  alt=""
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-4 py-5">
              <h4 className="font-weight-bold mb-3">Our Features</h4>
              <h5 className="text-muted mb-3">
                <i className="fa fa-check text-secondary mr-3"></i>FRUITS
              </h5>
              <h5 className="text-muted mb-3">
                <i className="fa fa-check text-secondary mr-3"></i>MILK
              </h5>
              <h5 className="text-muted mb-3">
                <i className="fa fa-check text-secondary mr-3"></i>SUGAR
              </h5>
              <h5>FRUITS</h5>
              <p>
                Fruit is in the DNA of iCream. It’s what makes our ice creams
                unique and original. We go to great lengths to source fresh
                fruits only from their most popular locations. Fruits that are
                freshly plucked from farms which eventually end up into freshly
                served scoops of delicious ice cream.
              </p>
              <h5>MILK</h5>
              <p>
                Milk is a key ingredient in ice cream. And the milk that goes
                into iCream comes from the same vendor that we started doing
                business with, around three decades ago. This makes our ice
                creams rich, creamy and most importantly, consistent
              </p>
              <h5>SUGAR</h5>
              <p>
                We use pharma sugar, which is so fine and pure that it’s
                certified to be used even in medicines. Because we make sure
                only the best makes its way into our scoops
              </p>
            </div>
          </div>
        </div>
      </div>
     {/* Team */}
     <div className="container-fluid py-1">
        <div className="container py-1">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="section-title position-relative mb-5">
                Experienced & Most Famous Ice Cream Chefs
              </h1>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0 pb-5 pb-lg-0"></div>
          </div>
          <Carousel>
            <div className="row">
              <div className="col-12">
                <div className="team-item">
                  <div className="team-img mx-auto">
                    <img
                      className="rounded-circle w-100 h-100"
                      src="img/team-1.jpg"
                      alt=""
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div
                    className="position-relative text-center bg-light rounded px-4 py-5"
                    style={{ marginTop: "-100px" }}
                  >
                    <h3 className="font-weight-bold mt-5 mb-3 pt-5">Johnny</h3>
                    <h6 className="text-uppercase text-muted mb-4">Chef</h6>
                    <div className="d-flex justify-content-center pt-1">
                      <Link
                        className="btn btn-outline-secondary btn-social mr-2"
                        href="#"
                      >
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link
                        className="btn btn-outline-secondary btn-social mr-2"
                        href="#"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link
                        className="btn btn-outline-secondary btn-social mr-2"
                        href="#"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="team-item">
                  <div className="team-img mx-auto">
                    <img
                      className="rounded-circle w-100 h-100"
                      src="img/team-2.jpg"
                      alt=""
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div
                    className="position-relative text-center bg-light rounded px-4 py-5"
                    style={{ marginTop: "-100px" }}
                  >
                    <h3 className="font-weight-bold mt-5 mb-3 pt-5">Dani</h3>
                    <h6 className="text-uppercase text-muted mb-4">
                      Designation
                    </h6>
                    <div className="d-flex justify-content-center pt-1">
                      <Link
                        className="btn btn-outline-secondary btn-social mr-2"
                        href="#"
                      >
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link
                        className="btn btn-outline-secondary btn-social mr-2"
                        href="#"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link
                        className="btn btn-outline-secondary btn-social mr-2"
                        href="#"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="team-item">
                  <div className="team-img mx-auto">
                    <img
                      className="rounded-circle w-100 h-100"
                      src="img/team-3.jpg"
                      alt=""
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div
                    className="position-relative text-center bg-light rounded px-4 py-5"
                    style={{ marginTop: "-100px" }}
                  >
                    <h3 className="font-weight-bold mt-5 mb-3 pt-5">
                      Full Name
                    </h3>
                    <h6 className="text-uppercase text-muted mb-4">
                      Designation
                    </h6>
                    <div className="d-flex justify-content-center pt-1">
                      <Link
                        className="btn btn-outline-secondary btn-social mr-2"
                        href="#"
                      >
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link
                        className="btn btn-outline-secondary btn-social mr-2"
                        href="#"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link
                        className="btn btn-outline-secondary btn-social mr-2"
                        href="#"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="team-item">
                  <div className="team-img mx-auto">
                    <img
                      className="rounded-circle w-100 h-100"
                      src="img/team-4.jpg"
                      alt=""
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div
                    className="position-relative text-center bg-light rounded px-4 py-5"
                    style={{ marginTop: "-100px" }}
                  >
                    <h3 className="font-weight-bold mt-5 mb-3 pt-5">
                      Full Name
                    </h3>
                    <h6 className="text-uppercase text-muted mb-4">
                      Designation
                    </h6>
                    <div className="d-flex justify-content-center pt-1">
                      <Link
                        className="btn btn-outline-secondary btn-social mr-2"
                        href="#"
                      >
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link
                        className="btn btn-outline-secondary btn-social mr-2"
                        href="#"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link
                        className="btn btn-outline-secondary btn-social mr-2"
                        href="#"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default About;
