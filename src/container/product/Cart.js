import React, { Component } from "react";
import { connect } from "react-redux";
import ProductList from "./ProductList";
import { bindActionCreators } from "redux";
import { removeProductFromCart } from "../../action/product/productAction";
import VanillaToasts from "vanillatoasts";
import deleteCartImg from "../../Image/cart.png";

class Cart extends Component {
  removeCart = id => {
    this.props.removeCart(id);
    VanillaToasts.create({
      title: "DELETE PRODUCT FROM CART",
      text: "Delete Product From Cart Successfully",
      type: "danger",
      icon:deleteCartImg,
      timeout: 2000,
      callback: () => {}
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row m-5">
          <ProductList
            items={this.props.cart.reverse()}
            type="cart"
            totalPrice={this.props.tPrice}
            click={this.removeCart}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state)
  return {
    cart: state.product.cart,
    tPrice:state.product.totalPrice,
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      removeCart: removeProductFromCart
    },
    dispatch
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
