import React from 'react'
import '../App.css'
import Counter from './Counter'
import Form from './Form'
import SimpleCounter from './SimpleCounter'
import Fetch from './Fetch'

const App = () => {
  return <div className="App">
    <header className="App-header">
      <h1>Hook examples!</h1>
    </header>
    <main className="App-content">
      <h2>Stateful counters</h2>
      <SimpleCounter />
      <SimpleCounter />

      <h2>Fetch example</h2>
      <Fetch />

      <h2>Shared state counters</h2>
      <Counter />
      <Counter />

      <h2>Custom hook</h2>
      <Form />

    </main>
    <footer>All examples stolen!  See readme :-)</footer>
  </div>
}

export default App
