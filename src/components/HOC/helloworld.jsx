import React from 'react'
import HigherOrderComponent from './HigherOrderComponent'

const helloworld = ({name}) => {
  return (
    <div>
      <h1>
        Hello,{name}
      </h1>
    </div>
  )
}
const Enhansehelloworld = HigherOrderComponent(helloworld);

export default Enhansehelloworld
