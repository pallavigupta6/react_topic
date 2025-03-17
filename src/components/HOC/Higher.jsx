import React from 'react'

const Higher = (WrappedComponent) => {
  return function EnhanceComponent(props){
    console.log(`Modified ${WrappedComponent} with new props`);
    return <WrappedComponent {...props}/>
  }
}

export default Higher
