import { getDatabase, ref, set } from "firebase/database";
import { app } from "../firebase";
import React from "react";
import { Link } from "react-router-dom";
import list from "../data";
import Cards from "./Cards";
import "./css/cart.css";
// const db = getDatabase(app);
const Product = ({ handleClick }) => {
  // const putData = () => {
  //     set(ref(db, "details/proddetails"), {
  //       id: 1,
  //       name: "Vanilla",
  //       price: 80,
  //     });
  // };
  return (
    <div>
      {/* Header */}
    <div className="jumbotron jumbotron-fluid page-header" style={{'marginTop': '20px'}}>
        <div className="container text-center py-5">
            <h1 className="text-white display-3 mt-lg-5">Product</h1>
            <div className="d-inline-flex align-items-center text-white">
                <p className="m-0"><Link className="text-white" to="/Homepage">Home</Link></p>
                <i className="fa fa-circle px-3"></i>
                <p className="m-0">Product</p>
            </div>
        </div>
    </div>

      <div className="container-fluid py-2">
        <div className="container py-2">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h1 className="section-title position-relative text-center mb-5">
                Best Prices We Offer For Ice Cream Lovers
              </h1>
            </div>
            <div className="row">
              {list.map((item) => (
                <Cards item={item} key={item.id} handleClick={handleClick} />
              ))}
              <div className="col-12 text-center">
              <Link to="/WIP" className="btn btn-primary py-3 px-5">
                Load More
              </Link>
            </div>
            </div>
          </div>
        </div>
      </div>
      <section></section>
    </div>
  );
};

export default Product;