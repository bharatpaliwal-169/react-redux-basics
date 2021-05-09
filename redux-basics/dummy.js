// console.log("Hello From Index!!");

const redux = require('redux');

//creating a store
const createStore = redux.createStore();

//action 
const BUY_CAKE = 'BUY_CAKE';
function buyCake() {
  return {
    type: BUY_CAKE,
    info : "First redux action"
  }
};

//reducer

// (prevState,action) => newState
const initialState = {
  numOfCakes: 10
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes - 1
    }
    default: return state
  }
}
// holding the reducer and the entire state in store
const store = createStore(reducer);

//get the state from the application
console.log("initial state: ",store.getState());

//to make changes in the store
const unsubscribe = store.subscribe(()=> console.log("updated State : " ,store.getState()));
// dispatch takes action
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

// get out of the store
unsubscribe();



