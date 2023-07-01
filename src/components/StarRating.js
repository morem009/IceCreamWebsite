import React, { useState } from "react";
import "./css/style.css";
// import { Link } from "react-router-dom";
import { app } from "../firebase";
import { getDatabase, push, ref, onValue } from "firebase/database";
import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModalFooter,
  MDBModalHeader,
  MDBTypography,
} from "mdb-react-ui-kit";

const db = getDatabase();
const StarRating = (props) => {
  const [review_data, setr_data] = useState([]);
  // useEffect(()=>{console.log(review_data)},[review_data]);
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => {
    const dataRef = ref(db, `/review/${props.name}`);
    console.log(dataRef)
    onValue(dataRef, (snapshot) => {
      const data = [];
      snapshot.forEach((groupSnapshot) => {
        // console.log("1" + groupSnapshot.key); // "-N02...R1r", "-N02...1T8"
        data.push({
          name: groupSnapshot.child("name").val(),
          review: groupSnapshot.child("feedback").val(),
          rating: groupSnapshot.child("rating").val(),
        });
      });
      setr_data(data);
      // console.log(data)
    });
    setBasicModal(!basicModal, review_data);
  };
  return (
    <div className="star-rating">
      <>
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <>
              <button
                type="button"
                key={index}
                className={index <= props.ratings ? "on" : "off"}
                onClick={toggleShow}
              >
                <span className="star">&#9733;</span>
              </button>
            </>
          );
        })}
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
                  {props?.name || "NULL"}
                </MDBTypography>
                <MDBTypography
                  tag="h4"
                  className="mb-5"
                  style={{ color: "#35558a" }}
                >
                  Reviews
                </MDBTypography>

                {review_data.map((data) => (
                  <div>
                    <div className="mb-0" style={{ color: "#35558a" }}>
                      <p>{data.name}</p>
                    </div>
                    <div>
                      {[...Array(5)].map((star, index) => {
                        index += 1;
                        return (
                          <>
                            <button
                              type="button"
                              key={index}
                              className={index <= data.rating ? "on" : "off"}
                              onClick={toggleShow}
                            >
                              <span className="star">&#9733;</span>
                            </button>
                          </>
                        );
                      })}
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="fw-bold">
                        <p>{data.review}</p>
                      </div>
                      <p className="fw-bold" style={{ color: "#35558a" }}></p>
                    </div>
                  </div>
                ))}
              </MDBModalBody>
              <MDBModalFooter className="d-flex justify-content-center border-top-0 py-4"></MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </>
    </div>
  );
};

export default StarRating;
