import React from "react";
import Product from "./Product";
import { connect } from "react-redux";
import Banner from "./Banner";

const Products = ({ products }) => {
  return (
    <div >
      <Banner />
      <div className="mt-10 w-screen product-box mx-2 grid md:grid-cols-3 grid-cols-2 justify-items-center">
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
