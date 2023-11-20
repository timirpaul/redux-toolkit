import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./features/counter/counterSlice";

const ReduxPage = () => {
  const count = useSelector((state) => state.counter.value);
  console.log(count);

  const dispatch = useDispatch();

  return (
    <>
      <h4>ReduxPage</h4>
      <h4>value:{count}</h4>
      <button onClick={() => dispatch(increment())}> + </button>
      <button onClick={() => dispatch(decrement())}> - </button>
    </>
  );
};
export default ReduxPage;
