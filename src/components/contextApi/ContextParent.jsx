import React from 'react'
import ContextChild from './ContextChild'
const ContextParent = () => {
  return (
    <div>
     <h1>Context-Parent</h1> 
   
    <ContextChild />
    </div>
  )
}

export default ContextParent
