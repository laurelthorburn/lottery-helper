import React, { useState } from "react";
import Ball from "../Ball/Ball";

//TODO: 1. create input that let's user pick which lottery they want to render (4 or 8 balls), 2. take selection and provide two different routes - mini or mega lottery that that will set the states to something unique which gets passed into the props
const LottoMachine = ({title, balls, maxNum}) => {
  const [number, setNumber] = useState("");
  const numArray = [];

  const handleSubmit = (e) => {
      e.preventDefault();
      const random = Math.floor(Math.random() * maxNum) + 1;
      setNumber(random);
  };
  return (
    <>
        <h1>{title}</h1>
        <button onClick={handleSubmit} >Generate</button>


      {/* {number !== "" && numArray.map(n => <Ball number={number}) />} */}
    </>
  );
};

export default LottoMachine;
