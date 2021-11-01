import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import CartItem from "../components/CartItem";

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <div className="mt-10 h-screen md:mb-20 flex flex-row justify-center">
      <div className="mt-10 w-screen  mx-2 justify-items-center">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="mt-10 mx-2 justify-items-center ounded-sm py-2 px-3 uppercase font-bold tracking-wide 
           mb-2  shadow text-center">
        <h4>Cart Summary</h4>
        <div>
          <span>TOTAL: ({totalItems} items)</span><br />
          <span>$ {totalPrice}</span>
        </div>
        <button className='btn '>Proceed To Checkout</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
