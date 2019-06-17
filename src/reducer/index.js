import reducer from "./counter";
import person from "./person";
import product from "./product";
import { combineReducers } from "redux";

export default combineReducers({
  person,
 count:reducer,
 product

});
