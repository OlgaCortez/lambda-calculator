import React, { useState } from "react";

//import any components needed
import NumberButton from "./NumberButton.js";

//Import your array data to from the provided data file
import { numbers } from "../../../data.js";

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [buttonNumbers, setButtonNumbers] = useState(numbers);
  console.log("Numbers", props);
  return (
    <div>
      {buttonNumbers.map(number => {
      return <NumberButton key={number} text={number} addNumber={props.addNumber} />;
      })}
    </div>
  );
};

export default Numbers;
