import React, { useState } from "react";
import Lottery from '../Lottery/Lottery'

//TODO: 1. create input that let's user pick which lottery they want to render (4 or 8 balls), 2. take selection and provide two different routes - mini or mega lottery that that will set the states to something unique which gets passed into the props
const LottoMachine = () => {
    const [title, setTitle] = useState("Pick your lotto ticket 🎟️");
  const [balls, setBalls] = useState("");
  const [values, setValues] = useState("");

  const handleSubmit = () => {
    console.log("welcome");
    //TODO: Check if value is mega or mini. Set states accordingly and pass as props
  };
  return (
    <>
      <form action="submit" onSubmit={handleSubmit}>
<h1>{title}</h1>
<select>
  <option value="mega">Mega Lottery</option>
  <option value="mini">Mini Lottery</option>
</select>
<button>Submit</button>
      </form>

      <Lottery title={title} balls={balls} values={values}/>
    </>
  );
};

export default LottoMachine;
