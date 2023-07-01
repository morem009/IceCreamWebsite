import React from "react";
import "../css/style.css";
import "../css/style.min.css";
import { Link } from "react-router-dom";
const Help = () => {
  return (
    <div>
      {/* Header  */}
      <div
        className="jumbotron jumbotron-fluid page-header"
        style={{ marginBottom: "10px", marginTop: "20px" }}
      >
        <div className="container text-center py-5">
          <h1 className="text-white display-3 mt-lg-5">Help</h1>
          <div className="d-inline-flex align-items-center text-white">
            <p className="m-0">
              <Link className="text-white" to="/Homepage">
                Home
              </Link>
            </p>
            <i className="fa fa-circle px-3"></i>
            <p className="m-0">Help</p>
          </div>
        </div>
      </div>
      <div
       className="container-fluid py-5"
        style={{ zIndex: "9", marginTop: "25px" }}
      >
        <p>
          If you need help with placing an order, choosing a flavor, or have any
          other questions, please visit our help page at
          www.icecreamwebsite.com/help. Our help page provides answers to
          frequently asked questions, as well as step-by-step instructions on
          how to place an order online. If you can&#39;t find the answer
          you&#39;re looking for, please contact our customer service team by
          visiting our support page at www.icecreamwebsite.com/support.
        </p>
      </div>
    </div>
  );
};

export default Help;
