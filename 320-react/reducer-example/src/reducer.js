// TYPES (optional)
// helps prevent misspelling the strings later on
// and know what types are available
export const INCREMENT = 'increment'
export const DECREMENT = 'decrement'
export const RESET = 'reset'
export const SET_NUMBER = 'set_number'


// state is the current state (before the change)
// action is the information from dispatch
function reducer(state, action) {
    // ...
    // action -> { type: ... , payload: ... }
    switch(action.type) {
      case INCREMENT:
        return state + action.payload
      case 'decrement':
        return state - action.payload
      case RESET:
        return 0
      case SET_NUMBER:
        return action.payload
      default: 
        return state
    }
    // if (action.type === 'increment') {
    //   // ...
    //   return state + 1
    // } else if (action.type === 'decrement') {
    //   return state - 1
    // } else if (action.type === 'reset') {
    //   return 0
    // } 
    // console.log('state: ', state) // 0
    // console.log('action: ', action) // increment, decrement, reset
    // return state
  }

  // dispatch -> sends information/instructions to reducer -> which then returns a new state

  export default reducer