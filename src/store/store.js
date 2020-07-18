import { combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";

const configureStore = () => {
  const rootReducer = combineReducers({ authReducer });

  return createStore(rootReducer);
};

export default configureStore;
