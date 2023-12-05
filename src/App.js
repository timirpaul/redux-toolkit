import "./styles.css";
import Child from "./Child";
import { useState, useEffect } from "react";
import ReduxPage from "./ReduxPage";
import LoginPage from "./LoginPage";

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    setCount((preVal) => preVal + 1);
  };

  const mythrottle = (fn, d) => {
    return (...arg) => {
      document.getElementById("btn1").disabled = true;
      setTimeout(() => {
        fn();
      }, d);
    };
  };

  const newTh = mythrottle(() => {
    document.getElementById("btn1").disabled = false;
    console.log("clicked!!");
  }, 2000);

  let arr = ["a", "v"];
  arr = ["z", ...arr, "k"];
  return (
    <div className="App">
      <h1>hello</h1>
      <h3>Arr : {arr}</h3>
      <Child />
      <div id="parent">
        parent
        <div id="child">
          <button id="btn1" onClick={newTh}>
            Click me
          </button>
        </div>
        <div id="child">
          <button onClick={handleClick}> {count}</button>
        </div>
        <ReduxPage />
        <LoginPage />
      </div>
    </div>
  );
}
