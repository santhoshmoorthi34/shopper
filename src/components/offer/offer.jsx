import React from "react";
import "./offer.css";
import exclusive_image from "../Assets/exclusive_image.png";

const Offer = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h2>Exculusive</h2>
        <h1>Offers for you</h1>
        <p>ONLY ON BEST SELLER PRODUCTS</p>
        <button>check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offer;
