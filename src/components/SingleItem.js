import React from "react";

import { connect } from "react-redux";
import { addToCart } from "../redux/Shopping/shopping-actions";

const SingleItem = ({ current, addToCart }) => {
  return (
    <div className="mt-10 md:h-screen md:mb-20 flex justify-center">
    <div className="flex flex-col md:shadow-md justify-center md:mt-14 items-center mb-14 w-3/4 pt-2 pl-14 pb-20">
      <img className='rounded-md sm:w-32'
        src={current.image}
        alt={current.title}
      />
      <div className='flex flex-col w-full items-center'>
        <p className='title-single'>{current.title}</p>
        <p className='text-single'>{current.full_description}</p>
        <p className='price-single'>$ {current.price}</p>
        <button
          onClick={() => addToCart(current.id)}
          className="btn"
        >
          Add To Cart
        </button>
      </div>
    </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);