import React, { useState, useEffect } from "react";

// useState :Manages state in functional components.
// useEffect:Performs side effects in functional components.

function Counter() {
  const [count, setCount] = useState(0);
  const [counting, setCounting] = useState(0);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCounting(counting + 1);
  //   }, 1000);
  //   return () => clearInterval(timer);
  // }, [counting]);
  const increament = () => setCount(count + 1);
  const decreament = () => setCount(count - 1);
  return (
    <>
      <div>
        <p>Count: {count}</p>
        {/* <button onClick={() => setCount(count + 1)}>Increment-useState</button> */}
        <button onClick={increament}>Increment</button>
        <button onClick={decreament}>decreament</button>
      </div>
      {/* <div> Count-useEffect:{counting}</div> */}
    </>
  );
}
export default Counter;
