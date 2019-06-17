import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import {
  TYPE_INC,
  TYPE_DESC,
  ADD_INC,
  SUB_DESC
} from "../constants/actionType";
import allReducer from "../reducer/index";
import VanillaToasts from "vanillatoasts";
import "../../node_modules/vanillatoasts/vanillatoasts.css";
import User from "../Image/a.png";

// const confirmationMiddleware = store => next => action => {
//   console.log(action);
//   if (action.type === TYPE_INC) {
//     if (window.confirm("Are you sure?")) {
//       VanillaToasts.create({
//         title: "Welcome to my site",
//         text: action.error.toString(),
//         type: "success",
//         icon: User,
//         timeout: 10000,
//         callback: () => {}
//       });
//       next(action);
//     }
//   } else {
//     next(action);
//   }
// };

const unStoreReducer = ["person"];

const persistConfig = {
  key: "root",
  blacklist: unStoreReducer,
  storage: storage,
  stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};

const pReducer = persistReducer(persistConfig, allReducer);
export const store = createStore(
  pReducer,
  applyMiddleware(thunk)
);
export const persistor = persistStore(store);
