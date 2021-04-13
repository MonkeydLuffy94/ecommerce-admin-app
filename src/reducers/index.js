import { combineReducers } from "redux";
import authReducer from "./auth.reducers";
import registerReducer from "./register.reducer";
import categoryReducer from "./category.reducres";
import productReducer from "./product.reducers";
import orderReducer from "./order.reducers";

const rootReducer = combineReducers({
  auth: authReducer,
  register: registerReducer,
  category: categoryReducer,
  product: productReducer,
  orders: orderReducer,
});

export default rootReducer;
