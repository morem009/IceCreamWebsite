import React from "react";
import { Link } from "react-router-dom";
import "./css/style.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Carousel } from "react-bootstrap";
import Cards from "./Cards";
import list from "../data";

function Homepage(props) {
  return (
    //Main div
    <div>
      {/* Carousel */}
      <div
        className="container-fluid p-0 mb-2 pb-1 "
        style={{ marginBottom: "0px" }}
      >
        <div
          id="header-carousel"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="img/carousel-1.jpg" alt="" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h4 className="text-white text-uppercase mb-md-2"></h4>
                  <h4 className="text-white mb-md-3">
                    {props.name
                      ? `Hi ${props.name}`
                      : "Traditional & Delicious"}
                  </h4>
                  <h1 className="display-3 text-white mb-md-4">
                    Traditional Ice Cream Since 2018
                  </h1>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="img/carousel-2.jpg" alt="" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h4 className="text-white text-uppercase mb-md-3">
                    {props.name
                      ? `Hi ${props.name}`
                      : "Traditional & Delicious"}
                  </h4>
                  <h1 className="display-3 text-white mb-md-4">
                    Made From Our Own Organic Milk
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#header-carousel"
            data-slide="prev"
          >
            <div
              className="btn btn-secondary px-0"
              style={{ width: "45px", height: "45px" }}
            >
              <span className="carousel-control-prev-icon mb-n1"></span>
            </div>
          </a>
          <a
            className="carousel-control-next"
            href="#header-carousel"
            data-slide="next"
          >
            <div
              className="btn btn-secondary px-0"
              style={{ width: "45px", height: "45px" }}
            >
              <span className="carousel-control-next-icon mb-n1"></span>
            </div>
          </a>
        </div>
      </div>

      {/* About Start */}
      <div className="container-fluid py-2">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <h1 className="section-title position-relative text-center mb-5">
                Traditional & Delicious Ice Cream Since 2018
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

      {/* Promotion */}
      <div className="container-fluid my-2 py-2 px-0">
        <div className="row bg-primary m-0">
          <div className="col-md-6 px-0" style={{ minHeight: "500px" }}>
            <div className="position-relative h-100">
              <img
                className="position-absolute w-100 h-100"
                src="img/promotion.jpg"
                alt=""
                style={{ objectFit: "cover" }}
              />
              <button
                type="button"
                className="btn-play"
                data-toggle="modal"
                data-src="https://youtu.be/kWpXIlvZyGY"
                data-target="#videoModal"
              >
                <span></span>
              </button>
            </div>
          </div>
          <div className="col-md-6 py-5 py-md-0 px-0">
            <div className="h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
              <div
                className="d-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                style={{ width: "100px", height: "100px" }}
              >
                <h3 className="font-weight-bold text-secondary mb-0">80₹</h3>
              </div>
              <h3 className="font-weight-bold text-white mt-3 mb-4">
                Chocolate Ice Cream
              </h3>
              <p className="text-white mb-4">
                Chocolate ice cream is a type of ice cream and dessert. Usually,
                its made from cocoa powder. Sugar or artificial sweetener is
                added as well.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Video Model Start  */}
      <div
        className="modal fade"
        id="videoModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              {/* <!-- 16:9 aspect ratio --> */}
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                 className="embed-responsive-item"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/kWpXIlvZyGY"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen 
                  allowscriptaccess="always"
                ></iframe>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services   */}
      <div className="container-fluid py-2">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="section-title position-relative mb-5">
                Best Services We Provide For Our Clients
              </h1>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0 pb-5 pb-lg-0"></div>
          </div>
          <div className="row">
            <div className="col-12">
              <OwlCarousel>
                <div className="service-item">
                  <div className="service-img mx-auto">
                    <img
                      className="rounded-circle w-100 h-100 bg-light p-3"
                      src="img/service-1.jpg"
                      alt=""
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div
                    className="position-relative text-center bg-light rounded p-4 pb-5"
                    style={{ marginTop: "-75px" }}
                  >
                    <h5 className="font-weight-semi-bold mt-5 mb-3 pt-5">
                      Quality Maintain
                    </h5>
                    <p>We provide high quality products.</p>
                  </div>
                </div>
                <div className="service-item">
                  <div className="service-img mx-auto">
                    <img
                      className="rounded-circle w-100 h-100 bg-light p-3"
                      src="img/service-2.jpg"
                      alt=""
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div
                    className="position-relative text-center bg-light rounded p-4 pb-5"
                    style={{ marginTop: "-75px" }}
                  >
                    <h5 className="font-weight-semi-bold mt-5 mb-3 pt-5">
                      Individual Approach
                    </h5>
                    <p>Customized Scoops are provided.</p>
                  </div>
                </div>
                <div className="service-item">
                  <div className="service-img mx-auto">
                    <img
                      className="rounded-circle w-100 h-100 bg-light p-3"
                      src="img/service-3.jpg"
                      alt=""
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div
                    className="position-relative text-center bg-light rounded p-4 pb-5"
                    style={{ marginTop: "-75px" }}
                  >
                    <h5 className="font-weight-semi-bold mt-5 mb-3 pt-5">
                      Celebration Ice Cream
                    </h5>
                    <p>We also take party and bulk Orders.</p>
                  </div>
                </div>
                <div className="service-item">
                  <div className="service-img mx-auto">
                    <img
                      className="rounded-circle w-100 h-100 bg-light p-3"
                      src="img/service-4.jpg"
                      alt=""
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div
                    className="position-relative text-center bg-light rounded p-4 pb-5"
                    style={{ marginTop: "-75px" }}
                  >
                    <h5 className="font-weight-semi-bold mt-5 mb-3 pt-5">
                      Delivery To Any Point
                    </h5>
                    <p>Our distributers are spread across wide areas.</p>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
      {/* Portfolio */}
      <div className="container-fluid my-2 py-2 px-0">
        <div className="row justify-content-center m-0">
          <div className="col-lg-5">
            <h1 className="section-title position-relative text-center mb-5">
              Delicious Ice Cream Made From Our Very Own Organic Milk
            </h1>
          </div>
        </div>
        <div className="row m-0 portfolio-container">
          <div className="col-lg-4 col-md-6 p-0 portfolio-item">
            <div className="position-relative overflow-hidden">
              <img
                className="img-fluid w-100"
                src="img/portfolio-1.jpg"
                alt=""
              />
              <Link
                className="portfolio-btn"
                href="img/portfolio-1.jpg"
                data-lightbox="portfolio"
              >
                <i
                  className="fa fa-plus text-primary"
                  style={{ fontSize: "60px" }}
                ></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 p-0 portfolio-item">
            <div className="position-relative overflow-hidden">
              <img
                className="img-fluid w-100"
                src="img/portfolio-2.jpg"
                alt=""
              />
              <Link
                className="portfolio-btn"
                href="img/portfolio-2.jpg"
                data-lightbox="portfolio"
              >
                <i
                  className="fa fa-plus text-primary"
                  style={{ fontSize: "60px" }}
                ></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 p-0 portfolio-item">
            <div className="position-relative overflow-hidden">
              <img
                className="img-fluid w-100"
                src="img/portfolio-3.jpg"
                alt=""
              />
              <Link
                className="portfolio-btn"
                href="img/portfolio-3.jpg"
                data-lightbox="portfolio"
              >
                <i
                  className="fa fa-plus text-primary"
                  style={{ fontSize: "60px" }}
                ></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 p-0 portfolio-item">
            <div className="position-relative overflow-hidden">
              <img
                className="img-fluid w-100"
                src="img/portfolio-4.jpg"
                alt=""
              />
              <Link
                className="portfolio-btn"
                href="img/portfolio-4.jpg"
                data-lightbox="portfolio"
              >
                <i
                  className="fa fa-plus text-primary"
                  style={{ fontSize: "60px" }}
                ></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 p-0 portfolio-item">
            <div className="position-relative overflow-hidden">
              <img
                className="img-fluid w-100"
                src="img/portfolio-5.jpg"
                alt=""
              />
              <Link
                className="portfolio-btn"
                href="img/portfolio-5.jpg"
                data-lightbox="portfolio"
              >
                <i
                  className="fa fa-plus text-primary"
                  style={{ fontSize: "60px" }}
                ></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 p-0 portfolio-item">
            <div className="position-relative overflow-hidden">
              <img
                className="img-fluid w-100"
                src="img/portfolio-6.jpg"
                alt=""
              />
              <Link
                className="portfolio-btn"
                href="img/portfolio-6.jpg"
                data-lightbox="portfolio"
              >
                <i
                  className="fa fa-plus text-primary"
                  style={{ fontSize: "60px" }}
                ></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Products */}
      <div className="container-fluid py-2">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="section-title position-relative mb-5">
                Best Prices We Offer For Ice Cream Lovers
              </h1>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0 pb-5 pb-lg-0"></div>
          </div>
          <Carousel>
            <div className="row">
              {list.map((item) => (
                <div className="col-lg-3 col-md-6 mb-4 pb-2">
                  <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                    <div
                      className="bg-primary mt-n5 py-3"
                      style={{ width: "80p" }}
                    ></div>
                    <div
                      className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3"
                      style={{ width: "150px", height: "150px" }}
                    >
                      <img
                        className="rounded-circle w-100 h-100"
                        src={item.img}
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <h5 className="font-weight-bold mb-4">{item.name}</h5>
                  </div>
                </div>
              ))}
            </div>
          </Carousel>
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
                      Aberforth
                    </h3>
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
                      src="img/team-4.jpg"
                      alt=""
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div
                    className="position-relative text-center bg-light rounded px-4 py-5"
                    style={{ marginTop: "-100px" }}
                  >
                    <h3 className="font-weight-bold mt-5 mb-3 pt-5">Jordy</h3>
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
              </div>
            </div>
          </Carousel>
        </div>
      </div>
      {/* Back to Top  */}
      <Link to="/Homepage" className="btn btn-secondary px-2 back-to-top">
        <i className="fa fa-angle-double-up"></i>
      </Link>

      {/* main div end */}
    </div>
  );
}

export default Homepage;
