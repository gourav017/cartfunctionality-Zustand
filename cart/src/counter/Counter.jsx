import { useState } from "react";
import { counterStore } from "../store/counter-store";

const Counter = () => {
  const { count, inc, dec, movetozero } = counterStore((state) => ({
    count: state.count,
    inc: state.inc,
    dec: state.dec,
    movetozero: state.movetozero,
  }));

  return (
    <>
      <h1>{count}</h1>
      
      <button onClick={inc}>inc</button>
      <button onClick={dec}>dec</button>
      <button onClick={movetozero}>movetozzero</button>
    </>
  );
};

export default Counter;
