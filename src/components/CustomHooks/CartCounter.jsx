import useCounter from './useCounter'
const CartCounter = () => {
    const{count:cartItem ,decrementCount,incrementCount,resetCount}=useCounter()
  
  return (
   <div className='container'>
    <h1>
        car tItem:{cartItem}
    </h1>
    <button onClick={decrementCount}>Remove item to cart</button>
    <button onClick={incrementCount}>
    Adding items to cart
    </button>
    <button onClick={resetCount}> Reset Cart </button>
   </div>
  )
}

export default CartCounter
