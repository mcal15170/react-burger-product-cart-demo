import React, { Component } from "react";
import "./ProductList.css";

class ProductList extends Component {
 

  
 
  render() {
    return (
      <>
        {this.props.type === "cart" && (
          <div className="col-md-12">
            <div className="row mb-3 p-2 border">
              <div className="col-md-12">
                <h5>
                  Cart Report <i className="fa fa-bar-chart" />
                </h5>
              </div>
              <div className="col-md-4">
                Total Product : {this.props.items.length}
              </div>
              <div className="col-md-4">
                Payment Price : {this.props.type==="cart"?this.props.totalPrice:"" }
               
              </div>
            </div>
          </div>
        )}
        <div className="col-md-12">
          {this.props.items.map(item => {
            return (
              <div key={item.id} className="row mb-3 product">
                <div className="col-md-2">
                  <img className="proImg" src={item.img} alt={item.title} />
                </div>
                <div className="col-md-10">
                  <div className="row m-3">
                    <div className="col-md-4">
                      <div className="col-md-12 mb-1">
                        <i className="fa fa-tag" />
                        &nbsp;{item.title}
                      </div>
                      <div className="col-md-12 mb-1">
                        <b>$</b>&nbsp;
                        {this.props.type === "cart"
                          ? item.price * item.quantity
                          : item.price}
                      </div>
                      <div className="col-md-12 mb-1">
                        <i className="fa fa-shopping-cart" />
                        &nbsp;
                        {this.props.type === "cart" ? item.quantity : ""}
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <p>
                        <i className="fa fa-stack-exchange" />
                        &nbsp;{item.desc}
                      </p>
                    </div>
                    <div className="col-md-2 mb-2">
                      <button
                        className="btn btn-raised btn-primary"
                        onClick={() => {
                          this.props.click(
                            this.props.type === "product" ? item : item.id
                          );
                        }}
                      >
                        <i className="fa fa-cart-plus" />
                        &nbsp;
                        {this.props.type === "product"
                          ? "ADD TO CART"
                          : "REMOVE CART"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default ProductList;
