import React from 'react'

const GrandChild = ({user}) => {
  return (
    <div>
    <h1>  GrandChild</h1>
      <p>hello {user.name}</p>
    </div>
  )
}

export default GrandChild
