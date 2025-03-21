import React, { useReducer } from "react";
// useReducer:Manages complex state logic in functional components.
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Component() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>useReducer-Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}
export default Component;
