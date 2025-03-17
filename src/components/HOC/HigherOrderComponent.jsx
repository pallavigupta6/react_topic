import React from "react";

const HigherOrderComponent = (WrappedComponent) => {
  return function EnhanceComponent(props) {
    console.log(`Modified $ {WrappedComponent.name} with new props`);
    return <WrappedComponent {...props} />;
  };
};

export default HigherOrderComponent;
