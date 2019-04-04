import React, { createContext, useContext, useReducer } from 'react'

export const StateContext = createContext()

export const StateProvider = ({ reducer, initialState, children }) => 
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>

export const useStateValue = () => useContext(StateContext)

export const reducer = (state, action) => {
  switch (action.type) {
    case 'increment': {
      return { ...state, count: state.count + 1 }
    }
    case 'decrement': {
      return { ...state, count: state.count - 1 }
    }
    default: {
      return state
    }
  }
}
