import { combineReducers } from "redux";
import cart from "./cart";

const rootReducer = combineReducers({
  cart,
});

export default rootReducer;

// App.js 에 store 반영