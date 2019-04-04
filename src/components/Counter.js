import React, { useContext } from 'react'
import { StateContext } from '../store'
import Actions from '../store/actions'

const Counter = () => {
  const [{ count }, dispatch] = useContext(StateContext)
  
  return <div className="App-example">
    <span className="space">Count: {count}</span>
    <button type="button" onClick={() => dispatch(Actions.INCREMENT)}>+</button>
    <button type="button" onClick={() => dispatch(Actions.DECREMENT)}>-</button>
  </div>
}

export default Counter
