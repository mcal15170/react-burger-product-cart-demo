import {
  TYPE_INC,
  TYPE_DESC,
  ADD_INC,
  SUB_DESC
} from "../constants/actionType";

const Async_INC = (param) => {
  return { type: TYPE_INC, payLoad: param };
};

export const Increment = (param) => {
  // return dispatch => {
  //   setTimeout(() => {
  //     dispatch(Async_INC(param));
  //   }, 3000);
  // };

  return {
    type:TYPE_INC,
    payLoad:1,
    error:"Counter Action Done "
  }
};

export const Decremnent = () => {
  return {
    type: TYPE_DESC,
    payLoad: 1
  };
};

export const AddFive = () => {
  return {
    type: ADD_INC,
    payLoad: 5
  };
};

export const RemoveFive = () => {
  return { type: SUB_DESC, payLoad: 5 };
};
