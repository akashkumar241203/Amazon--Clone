import React, { useContext, useEffect, useState } from 'react';
import "./CartProduct.css";
import { addToCart, removeFromCart } from '../reusableFunction/CartFunctionality';
import { CartContext } from '../../App';

const CartProduct = ({ data }) => {
  if (!data) {
    console.log("No data provided to CartProduct component");
    return <p>No product data available</p>;
  }
  const {cart, updateCart} = useContext(CartContext);
  const { product_name, discounted_price, img_link} = data;

  const [currentQuantity, setCurrentQuantity] = useState(cart.find((item) => item.product_id === data.product_id)?.quantity || 0);
  useEffect(()=>{
      setCurrentQuantity(cart.find((item) => item.product_id === data.product_id)?.quantity || 0);
  }, [cart, updateCart, data.product_id]);
  return (
    <>
      <div className='cart-product cart-left'>
        <img src={img_link} alt={product_name} className='cart-img'/>
        <div className="cart-info">
          <strong>{product_name}</strong>
          <p className='instock'>In Stock</p>
          <p>Price: {discounted_price}</p>
          <div className="flex gap-2 border-yellow-300 border-4 rounded-full px-4 py-1 w-28 justify-between flex-col font-semibold">
              <button className="" onClick={()=>removeFromCart(data, cart, updateCart)}> - </button>
              <span className="">{currentQuantity}</span>
              <button className="" onClick={()=>addToCart(data, cart, updateCart)}> + </button>
            </div>
        </div>
      </div>
      <hr/>
    </>
  );
};

export default CartProduct;
