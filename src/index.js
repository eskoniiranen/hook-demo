import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { StateProvider } from './store'
import reducer from './store/reducer'

const initialState = {
  count: 0
}

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>, 
  document.getElementById('root')
)
