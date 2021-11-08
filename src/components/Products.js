import React from "react";
import Product from "./Product";
import { connect } from "react-redux";
import Banner from "./Banner";

const Products = ({ products }) => {
  return (
    <div >
      <div className='hidden md:block'><Banner /></div>
      <div className="mt-4 pl-20 sm:pl-0 sm:mt-10 w-screen product-box mx-2 md:grid  sm:grid-cols-2 lg:grid-cols-3 justify-center justify-items-center">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
        <div className="h-20"></div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
