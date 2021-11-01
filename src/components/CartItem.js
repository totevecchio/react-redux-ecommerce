import React, { useState } from "react";

import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from "../redux/Shopping/shopping-actions";

const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  return (
    <div className='shadow-md flex items-center m-14'>
      <img className='rounded-md w-32'
        src={item.image}
        alt={item.title}
      />
      <div className='flex'>
        <p className='text-cart'>{item.title}</p>
        {/* <p className='text-cart'>{item.description}</p> */}
        <p className='text-cart'>$ {item.price}</p>
      </div>
      <div >
        <div >
          <label htmlFor="qty" className='qty'>Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
            className='qty'
          />
        </div>
      </div>
      <button
          onClick={() => removeFromCart(item.id)}
          className='h-5 w-5 '
        >
          <img
            src="https://image.flaticon.com/icons/svg/709/709519.svg"
            alt="remove"
          />
        </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);