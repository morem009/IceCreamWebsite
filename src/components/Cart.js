import React from "react";
import { Link } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useState } from "react";
import { useEffect } from "react";
import {
  MDBBtn,
  MDBIcon,
  MDBModal,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModalFooter,
  MDBModalHeader,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
const Cart = ({ cart, setCart, handleChange }, props) => {
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);

  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    // handlePrice();
  };

  useEffect(() => {
    handlePrice();
  });
  return (
    <div>
      {/* Header */}
      <div
        className="jumbotron jumbotron-fluid page-header"
        style={{ marginTop: "20px" }}
      >
        <div className="container text-center py-5">
          <h1 className="text-white display-3 mt-lg-5">Cart</h1>
          <div className="d-inline-flex align-items-center text-white">
            <p className="m-0">
              <Link className="text-white" to="/Homepage">
                Home
              </Link>
            </p>
            <i className="fa fa-circle px-3"></i>
            <p className="m-0">Cart</p>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h1 className="section-title position-relative text-center mb-5">
              Order Summary
            </h1>
          </div>
          <article>
            {cart?.map((item) => (
              <div className="row">
                <div className="cart_box" key={item.id}>
                  <div className="cart_img">
                    <img src={item.img} />
                    <p>{item.name}</p>
                  </div>
                  <div>
                    <button onClick={() => handleChange(item, +1)}> + </button>
                    <button>{item.amount}</button>
                    <button onClick={() => handleChange(item, -1)}> - </button>
                  </div>
                  <div>
                    <span>{item.price}</span>
                    <button onClick={() => handleRemove(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="total">
              <span>Total Price of your Cart</span>
              <span>Rs - {price}</span>
            </div>
            <div className="col-12 text-center">
              {/* Button trigger modal */}
              <MDBBtn
                className="btn btn-primary py-2 px-4"
                onClick={toggleShow}
              >
                Check out
              </MDBBtn>
            </div>
            {/* Modal */}
            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
              <MDBModalDialog>
                <MDBModalContent>
                  <MDBModalHeader className="border-bottom-0">
                    <MDBBtn
                      className="btn-close"
                      color="none"
                      onClick={toggleShow}
                    ></MDBBtn>
                  </MDBModalHeader>
                  <MDBModalBody className="text-start text-black p-4">
                    <MDBTypography
                      tag="h5"
                      className="modal-title text-uppercase mb-5"
                      id="exampleModalLabel"
                    >
                      {props.name}
                    </MDBTypography>
                    <MDBTypography
                      tag="h4"
                      className="mb-5"
                      style={{ color: "#35558a" }}
                    >
                      Thanks for your order
                    </MDBTypography>
                    <p className="mb-0" style={{ color: "#35558a" }}>
                      Payment summary
                    </p>
                    <hr
                      className="mt-2 mb-4"
                      style={{
                        height: "0",
                        backgroundColor: "transparent",
                        opacity: ".75",
                        borderTop: "2px dashed #9e9e9e",
                      }}
                    />
                    {cart?.map((item) => (
                      <div className="d-flex justify-content-between">
                        <p className="fw-bold mb-0">
                          {item.name}(Qty:{item.amount})
                        </p>
                        <p className="text-muted mb-0">{item.price}</p>
                      </div>
                    ))}
                    <hr
                      className="mt-2 mb-4"
                      style={{
                        height: "0",
                        backgroundColor: "transparent",
                        opacity: ".75",
                        borderTop: "2px dashed #9e9e9e",
                      }}
                    />
                    <div className="d-flex justify-content-between">
                      <p className="fw-bold">Total</p>
                      <p className="fw-bold" style={{ color: "#35558a" }}>
                        {price}
                      </p>
                    </div>
                  </MDBModalBody>
                  <MDBModalFooter className="d-flex justify-content-center border-top-0 py-4">
                    <Link
                      className="btn btn-secondary py-2 px-4"
                      to={{
                        pathname: "/Feedback",
                      }}
                    >
                      Feedback
                    </Link>
                  </MDBModalFooter>
                </MDBModalContent>
              </MDBModalDialog>
            </MDBModal>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Cart;
