import {
  TYPE_INC,
  TYPE_DESC,
  ADD_INC,
  SUB_DESC
} from "../constants/actionType";

// const INTIAL_STATE = {
//   counter: 0
// };

const reducer = (state = {counter:0}, action) => {
  switch (action.type) {
    case TYPE_INC:
      return {
        counter: state.counter + action.payLoad
      };

    case TYPE_DESC:
      return {
        counter: state.counter - action.payLoad
      };

    case ADD_INC:
      return {
        counter: state.counter + action.payLoad
      };

    case SUB_DESC:
      return {
        counter: state.counter - action.payLoad
      };
  }

  return state;
};
export default reducer;
