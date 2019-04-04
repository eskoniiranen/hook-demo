import React, { useState } from 'react'

const SimpleCounter = () => {
  const [count, setCount] = useState(0)

  return <div className="App-example">
    <span className="space">Count: {count}</span>
    <button onClick={() => setCount(count + 1)}>+</button>
    <button onClick={() => setCount(count - 1)}>-</button>
  </div>
}

export default SimpleCounter
