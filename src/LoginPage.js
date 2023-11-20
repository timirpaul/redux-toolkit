import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./features/counter/loginSlice";
import { newData } from "./features/data/addData";

const LoginPage = () => {
  let data = [
    {
      name: "newdata1",
      age: 21,
    },
  ];
  const isLogin = useSelector((state) => state.loginchecker.value);
  const datafromredux = useSelector((state) => state.addData.value);
  console.log("isLogin", isLogin);
  console.log("datafromredux", datafromredux);

  const dispatch = useDispatch();

  const [product, setProduct] = useState([]);

  // const res = { name: "res", age: "2" };
  const res = [
    { name: "res", age: "1" },
    { name: "res1", age: "2" },
  ];

  useEffect(() => {
    dispatch(newData(res));
    setProduct(datafromredux);
  }, []),
    console.log("product", product);

  return (
    <>
      <h4>login</h4>
      <h3>loginChecker:{isLogin}</h3>
      <button onClick={() => dispatch(login())}> login</button>
      <button onClick={() => dispatch(logout())}> logout</button>
      <button onClick={() => dispatch(newData(data))}> addnewdata</button>
      {datafromredux.map((p, i) => (
        <div key={i}>
          <h1>name:{p.name}</h1>
          <h1>name:{p.age}</h1>
        </div>
      ))}
    </>
  );
};

export default LoginPage;
