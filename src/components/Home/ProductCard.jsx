import "./Home.css";
import React, { useContext, useState } from "react";
import { addToCart, removeFromCart } from "../reusableFunction/CartFunctionality";
import { CartContext } from "../../App";

const ProductCard = ({ data }) => {
  const {cart, updateCart} = useContext(CartContext);
  const product = cart.find((item) => item.product_id === data.product_id);
  const currentQuantity = product ? product.quantity : 0;

  return (
    <div className="product-img-container">
      <img src={data.img_link} alt={data.product_id} className="product-img" />
      {currentQuantity ? (
        <>
            <div className="product-btns">
              <button className="product-btn" onClick={()=>addToCart(data, cart, updateCart)}> + </button> {""}
              <button className="product-btn" onClick={()=>removeFromCart(data, cart, updateCart)}> - </button>
            </div>
        </>
      ) : (<button className="product-btn" onClick={()=>addToCart(data, cart, updateCart)}> Add to Cart </button>)}
    </div>
  );
};

export default ProductCard;