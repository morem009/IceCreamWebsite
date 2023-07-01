import React from 'react';
import {Link} from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import { Carousel } from "react-bootstrap";

const Service = () => {
  return (
    <div>
          {/* Header */}
    <div className="jumbotron jumbotron-fluid page-header" style={{'marginTop': '20px'}}>
        <div className="container text-center py-5">
            <h1 className="text-white display-3 mt-lg-5">Service</h1>
            <div className="d-inline-flex align-items-center text-white">
                <p className="m-0"><Link className="text-white" to="/Homepage">Home</Link></p>
                <i className="fa fa-circle px-3"></i>
                <p className="m-0">Service</p>
            </div>
        </div>
    </div>
      {/* Services   */}
      <div className="container-fluid py-2">
        <div className="container py-2">
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
                    <p>
                      We provide high quality products.
                    </p>
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
                    <p>
                    Customized Scoops are provided. 
                    </p>
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
                    <p>
                    We also take party and bulk Orders.
                    </p>
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
                    <p>
                     Our distributers are spread across wide areas.
                    </p>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
