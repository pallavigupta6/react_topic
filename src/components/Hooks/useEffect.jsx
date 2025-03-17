import React, { useState, useEffect } from "react";

// useState :Manages state in functional components.
// useEffect:Performs side effects in functional components.

function Timer() {
  const [counting, setCounting] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounting(counting + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [counting]);

  return (
    <>
      <div>
      </div>
      <div> Count-useEffect:{counting}</div>
    </>
  );
}
export default Timer;
