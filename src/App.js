import React from 'react'
import './App.css'
import CounterExample from './CounterExample'
import FormExample from './FormExample'
import SimpleCounterExample from './SimpleCounterExample'
import FetchExample from './FetchExample'

const App = () => {
  return <div className="App">
    <header className="App-header">
      <h1>Hook examples!</h1>
    </header>
    <main className="App-content">
      <h2>Stateful counters</h2>
      <SimpleCounterExample />
      <SimpleCounterExample />

      <h2>Shared state counters</h2>
      <CounterExample />
      <CounterExample />

      <h2>Fetch example</h2>
      <FetchExample />

      <h2>Custom hook</h2>
      <FormExample />

    </main>
    <footer>All examples stolen!  See readme :-)</footer>
  </div>
}

export default App
