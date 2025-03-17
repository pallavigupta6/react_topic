import React from 'react'
import Higher from './Higher'

const Greet = ({name}) => {
  return (
    <div>
      <h1>
        Hello ,{name}
      </h1>
    </div>
  )
}
const EnhancedGreet = Higher(Greet)
export default EnhancedGreet
