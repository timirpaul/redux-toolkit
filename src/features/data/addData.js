import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const initialState = {
  value: []
};

const addDataSlice = createSlice({
  name: "addData",
  initialState,
  reducers: {
    newData: (state, action) => {
      console.log(action);

      const updatedValues = action.payload;

      // const { name, age } = action.payload;
      // console.log("nameaction", name);
      // console.log("ageaction", age);
      //  state.value.age = age;
      // state.value.name = name;
      state.value = updatedValues;
    }
  }
});

export const { newData } = addDataSlice.actions;

export default addDataSlice.reducer;
