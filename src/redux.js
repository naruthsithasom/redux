const redux = require('redux')

const initialState = {
  counter : 0,
}//Reducer
const reducer = (state = initialState, action) => {
  if(action.type === 'ADD_COUNTER'){
    return {...state, counter: state.counter + action.value}
  }
if(action.type === 'INCRESE_COUNTER'){
  return {...state, counter: state.counter + 1}
}

  return state
}
//Store
const store = redux.createStore(reducer)
console.log('1: ',store.getState())

//Action
action = {
  type: "ADD_COUNTER",
  value: 5,
}
store.dispatch({type:'INCRESE_COUNTER'})
console.log('2: ',store.getState())
store.dispatch(action)
console.log('3: ',store.getState())

//Subscription