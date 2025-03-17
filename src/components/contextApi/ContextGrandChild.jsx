import React ,{useContext} from 'react'
import { UserContext } from '../contextApi/UserContext'

const ContextGrandChild = () => {
  const user = useContext(UserContext)
  return (
    <div>
    <h1>  Context-GrandChild</h1>
      <p>Welcome {user.name} </p>
    </div>
  )
}

export default ContextGrandChild
