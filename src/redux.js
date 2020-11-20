const redux = require('redux')//step 1

const initialState = {
  counter : 0,
}//Reducer
const reducer = (state = initialState, action) => { //step 3
  if(action.type === 'ADD_COUNTER'){ //step 7
    return {...state, counter: state.counter + action.value}
  }
if(action.type === 'INCRESE_COUNTER'){
  return {...state, counter: state.counter + 1}
}

  return state
}
//Store
const store = redux.createStore(reducer) //step 2
console.log('1: ',store.getState())

//Subscription
store.subscribe( ()  => { //step 8
  console.log('[subscribe]', store.getState())
})

//Action
action = { //step 5
  type: "ADD_COUNTER",
  value: 5,
}

//Store dispatch
store.dispatch({type:'INCRESE_COUNTER'}) //step 6
console.log('2: ',store.getState())
store.dispatch(action)
console.log('3: ',store.getState())
