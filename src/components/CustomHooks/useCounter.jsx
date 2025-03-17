import {useState} from 'react'

const useCounter = () => {
    const[count,setCount]=useState(0)
    const incrementCount = () =>{
        setCount(count +1);
    }
    const decrementCount = () =>{
        setCount(count - 1);  
    }
    const resetCount = () => {  
        setCount(0)
    }
  return (
    count ,decrementCount,incrementCount,resetCount
  )
}

export default useCounter
