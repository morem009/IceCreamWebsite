import { ReactComponentElement, useState } from "react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import "./css/style.css";
import { app } from "../firebase";
import { getDatabase, push, ref } from "firebase/database";

const db = getDatabase(app);
const Contact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [prod, setProd] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const putData = (event) => {
    event.preventDefault();

    push(ref(db, `review/${prod}`), {
      name: name,
      email: email,
      prodname: prod,
      feedback: feedback,
      rating: rating,
    });
    setName("");
    setEmail("");
    setProd("");
    setFeedback("");
    setRating("");
    setHover("");
    alert("Your feedback has been submitted");

  };
  return (
    <div>
      {/* Header */}
      <div
        className="jumbotron jumbotron-fluid page-header"
        style={{ marginTop: "20px" }}
      >
        <div className="container text-center py-5">
          <h1 className="text-white display-3 mt-lg-5">Feedback</h1>
          <div className="d-inline-flex align-items-center text-white">
            <p className="m-0">
              <Link className="text-white" to="/Homepage">
                Home
              </Link>
            </p>
            <i className="fa fa-circle px-3"></i>
            <p className="m-0">Feedback</p>
          </div>
        </div>
      </div>
      {/* Contact */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h1 className="section-title position-relative text-center mb-5">
                Kindly provide your valuable Feedback
              </h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="contact-form bg-light rounded p-5">
                <div id="success"></div>
                <form
                  name="sentMessage"
                  id="contactForm"
                  noValidate="novalidate"
                  onSubmit={putData}
                >
                  <div className="form-row">
                    <div className="col-sm-6 control-group">
                      <input
                        type="text"
                        className="form-control p-4"
                        id="name"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required="required"
                        data-validation-required-message="Please enter your name"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="col-sm-6 control-group">
                      <input
                        type="email"
                        className="form-control p-4"
                        id="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required="required"
                        data-validation-required-message="Please enter your email"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control p-4"
                      id="product"
                      placeholder="Please Enter exact Product name"
                      value={prod}
                      onChange={(e) => setProd(e.target.value)}
                      required="required"
                      data-validation-required-message="Please enter a subject"
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <textarea
                      className="form-control p-4"
                      rows="6"
                      id="Feedback"
                      placeholder="Feedback"
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      required="required"
                      data-validation-required-message="Please enter your message"
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="App">
                    <p>Ratings</p>
                    <div className="star-rating">
                      {[...Array(5)].map((star, index) => {
                        index += 1;
                        return (
                          <button
                            type="button"
                            onChange={(e) => setRating(e.target.value)}
                            key={index}
                            className={
                              index <= (hover || rating) ? "on" : "off"
                            }
                            onClick={() => setRating(index)}
                            value={rating}
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(rating)}
                            onDoubleClick={() => {
                              setRating(0);
                              setHover(0);
                            }}
                          >
                            <span className="star">&#9733;</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <input
                      className="btn btn-secondary btn-block py-3 px-1 "
                      style={{ marginTop: "20px" }}
                      type="submit"
                      id="sendMessageButton"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
