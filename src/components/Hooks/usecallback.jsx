import React, { useState, useCallback } from "react";

function ParentComponent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <ChildComponent increment={increment} />
      <p>Count: {count}</p>
    </div>
  );
}

function ChildComponent({ increment }) {
  return <button onClick={increment}>Increment</button>;
}
export default ParentComponent;
