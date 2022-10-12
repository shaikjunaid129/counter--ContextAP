import React, { useContext } from 'react'
import { CounterContext } from '../contexts/Counter'

function Counter() {
  const counterStates = useContext(CounterContext);
  return (
    <div>
         <button onClick={() => counterStates.setCount(counterStates.count + 1)}>Increment</button>
         <button onClick={() => counterStates.setCount(counterStates.count - 1)}>Decrement</button>
    </div>
  )
}  

export default Counter