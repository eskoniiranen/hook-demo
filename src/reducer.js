import Actions from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    case Actions.INCREMENT.type: {
      return { ...state, count: state.count + 1 }
    }
    case Actions.DECREMENT.type: {
      return { ...state, count: state.count - 1 }
    }
    default: {
      return state
    }
  }
}

export default reducer
