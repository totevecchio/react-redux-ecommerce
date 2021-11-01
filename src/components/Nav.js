import React, { useEffect, useState } from "react";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import NavbarIcon from "./NavbarIcon";

import { connect } from "react-redux";

const Nav = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900  
    text-white shadow-lg md:w-screen md:flex-row md:h-16"
    >
      <div
        className="left w-16 m-0 flex flex-col  mb-0 mt-0
    text-white shadow-lg md:w-screen md:flex-row md:h-16 md:justify-start"
      >
        <NavbarIcon
          icon={<FaHome size="28" />}
          text="Home"
          path="/"
          tooltipClassName="navbar-tooltip"
          iconClassName="navbar-icon"
        />
      </div>
      <div
        className="right w-16 m-0 flex flex-col 
    text-white shadow-lg md:w-screen md:flex-row md:h-16 md:justify-end"
      >
        <NavbarIcon
          icon={<FaShoppingCart size="28" />}
          text="Cart"
          path="/cart"
          tooltipClassName="navbar-tooltip"
          iconClassName="navbar-icon-left"
        />
        <div
          className="relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto shadow-lg 
        bg-gray-800 text-yellow-400 hover:bg-yellow-600 
        hover:text-white rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer 
        md:mx-0 md:mr-8 md:ml-8"
        >
          {cartCount}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Nav);
