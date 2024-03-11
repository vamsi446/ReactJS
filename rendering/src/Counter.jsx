import React, { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  const increment = () => {
    //the below code will increment the count value only by one use updater functions to achieve the desired result
    // setCount(++count);
    // setCount(++count);
    // setCount(++count);

    // this will make sure to increase the count by 3

    //updater functions
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <p className="counter-display">Count : {count} </p>
      <button className="counter-button" onClick={increment}>
        Increment
      </button>
      <button className="counter-button" onClick={reset}>
        Reset
      </button>
      <button className="counter-button" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
