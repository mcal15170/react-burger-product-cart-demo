import React, { Component } from "react";
import { connect } from "react-redux";
import ProductList from "./ProductList";
import { addProductToCart } from "../../action/product/productAction";
import { bindActionCreators } from "redux";
import VanillaToasts from "vanillatoasts";

class Product extends Component {
  addToCart = product => {
    this.props.addProduct(product);
    VanillaToasts.create({
      title: "ADD TO CART",
      text: "Add Product '"+product.title+"' Successfully",
      type: "success",
      icon: product.img,
      timeout: 2000,
      callback: () => {}
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row m-5">
          <ProductList
            items={this.props.prodList}
            type="product"
            click={this.addToCart}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    prodList: state.product.product
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addProduct: addProductToCart
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
