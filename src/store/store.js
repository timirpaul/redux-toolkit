import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice";
import logincheckerReducer from "../features/counter/loginSlice";
import addDataReducer from "../features/data/addData";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    loginchecker: logincheckerReducer,
    addData: addDataReducer
  }
});

export default store;
