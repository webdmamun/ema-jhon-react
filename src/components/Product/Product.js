import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  // console.log(props);
  const { name, img, seller, price, stock } = props.product;
  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;

  return (
    <div className="single-product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="product-name">{name}</h4>
        <p>
          <small>by: {seller}</small>
        </p>
        <p>Price: {price}</p>
        <p>
          <small>Only {stock} left in stock- order soon!</small>
        </p>
        <button
          className="cart-btn"
          onClick={() => props.handleAddToCart(props.product)}
        >
          {cartIcon} add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
