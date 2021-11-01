import React from "react";
import { Link } from "react-router-dom";

//redux
import { connect } from "react-redux";
import { loadCurrentItem, addToCart } from "../redux/Shopping/shopping-actions";

const Product = ({ product, addToCart, loadCurrentItem }) => {
  return (
    <div className="flex flex-col shadow-md w-80 justify-center items-center mb-14">
      <img src={product.image} alt={product.title} className='w-60 rounded-md'/>

      <div className='w-60 mb-3'>
        <p className='title'>{product.title}</p>
        <p className='text'>{product.description}</p>
        <p className='price'>$ {product.price}</p>
      </div>

      <div className=''>
        <Link to={`/product/${product.id}`}>
          <button onClick={() => loadCurrentItem(product)} className="btn">
            View Item
          </button>
        </Link>
        <button onClick={() => addToCart(product.id)} className="btn">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
