import React, { useState } from "react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import {
  EmailShareButton,
  FacebookShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
  TelegramIcon
} from "react-share";
// import 'css/styles/cart.css';

const Cards = ({ item, handleClick }) => {
  const { name, price, img, ratings } = item;
  const [rating, setRating] = useState(0);
  return (
    <>
      {/* Products  */}
      <div className="col-lg-3 col-md-6 mb-4 pb-2">
        <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
          <div className="bg-primary mt-n5 py-3" style={{ width: "80p" }}>
            <h4 className="font-weight-bold text-white mb-0">{price}₹</h4>
          </div>
          <div
            className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3"
            style={{ width: "150px", height: "150px" }}
          >
            <img
              className="rounded-circle w-100 h-100"
              src={img}
              style={{ objectFit: "cover" }}
            />
          </div>
          <h5 className="font-weight-bold mb-4">{name}</h5>
          <StarRating type="view" name={name} ratings={ratings}/>
          <button
            onClick={() => handleClick(item)}
            className="btn btn-sm btn-secondary"
          >
            Add to Cart
          </button>
          <div style={{'flexDirection': 'row','marginLeft': '20', 'justifyContent': 'space-evenly' }}>
          <TelegramShareButton style={{'dataInline':'true'}}
            url={window.location.href}
          >
          <TelegramIcon size={32} round  style={{'marginTop':'10px'}} />
          </TelegramShareButton>
          <FacebookShareButton style={{'dataInline':'true'}}
            url={window.location.href}
          >
            <FacebookIcon size={32} round  style={{'marginTop':'10px','marginLeft':'5px'}}/>
          </FacebookShareButton>
          <WhatsappShareButton style={{'dataInline':'true'}}
            url={window.location.href}
          >
          <WhatsappIcon size={32} round  style={{'marginTop':'10px','marginLeft':'5px'}} />
          </WhatsappShareButton>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cards;