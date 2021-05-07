const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers

const BUY_CAKE = 'BUY_CAKE'

function buyCake () {
  return {
    type: BUY_CAKE,
    info: 'First redux action'
  }
}

const initialCakeState = {
  numOfCakes: 10
}



const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes - 1
    }
    default: return state
  }
}


const rootReducer = combineReducers({
  cake: cakeReducer,
})
const store = createStore(rootReducer)
console.log('Initial State ', store.getState())
const unsubscribe = store.subscribe(() => console.log('updated state' , store.getState()));
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()