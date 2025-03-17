import React from 'react'
import ContextGrandChild from './ContextGrandChild'

const ContextChild = ({user}) => {
  return (
    <div>
     <h1> Context-Child</h1>
      <ContextGrandChild />
    </div>
  )
}

export default ContextChild
