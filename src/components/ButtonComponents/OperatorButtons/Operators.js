import React from "react";

//import any components needed
import OperatorButton from "./OperatorButton.js";

//Import your array data to from the provided data file
import { operators } from "../../../data.js";

const Operators = () => {
  // STEP 2 - add the imported data to state
  return (
    <div>
      {operators.map(operator => <OperatorButton operator={operator}/>)}
    </div>
  );
};

export default Operators;
