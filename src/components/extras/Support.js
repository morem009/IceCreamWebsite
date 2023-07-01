import React from "react";
import { Link } from "react-router-dom";
const Support = () => {
  return (
    <div>
      {/* Header  */}
      <div
        className="jumbotron jumbotron-fluid page-header"
        style={{ marginBottom: "10px", marginTop: "20px" }}
      >
        <div className="container text-center py-5">
          <h1 className="text-white display-3 mt-lg-5">Support</h1>
          <div className="d-inline-flex align-items-center text-white">
            <p className="m-0">
              <Link className="text-white" to="/Homepagex">
                Home
              </Link>
            </p>
            <i className="fa fa-circle px-3"></i>
            <p className="m-0">Support</p>
          </div>
        </div>
      </div>
      
      <div
       className="container-fluid py-5"
        style={{ zIndex: "9", marginTop: "25px" }}
      >
        <p>
          If you have any questions or need assistance with your order, please
          feel free to contact our customer service team by visiting our support
          page at www.icecreamwebsite.com/support. You can also reach us by
          email at support@icecreamwebsite.com or by phone at 1-800-ICE-CREAM.
          Our customer service hours are Monday to Friday from 9:00am to 5:00pm
          EST. We are always happy to help!
        </p>
      </div>
    </div>
  );
};

export default Support;
