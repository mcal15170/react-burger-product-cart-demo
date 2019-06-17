import {ADD_PRODUCT_TO_CART,REMOVE_PRODUCT_FROM_CART} from "../../constants/actionType";

export const  addProductToCart=(product)=>{
    return dispatch => {
        setTimeout(() => {
          dispatch({
            type: ADD_PRODUCT_TO_CART,
            payload: product
          });
        }, 700);
      };

}


export const removeProductFromCart = productId => {
    return dispatch => {
      setTimeout(() => {
        dispatch({
          type: REMOVE_PRODUCT_FROM_CART,
          payload: productId
        });
      }, 700);
    };
  };

