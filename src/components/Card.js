import React from "react";
import cart from "../images/icon-cart.svg";

const Card = () => {
  return (
    <div className="card">
      <div className="hero"></div>
      <div className="product-details">
        <span className="brand">PERFUME</span>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="price">
          <span className="current-price">$149.99</span>
          <span className="previous-price">$169.99</span>
        </div>
        <button className="btn">
          <img src={cart} alt="cart icon" className="cart-icon" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
