// console.log("Hello From Index!!");

//action 
const BUY_CAKE = 'BUY_CAkE';
function buyCake() {
  return {
    type: BUY_CAKE,
    info : 'First redux action'
  }
}

//reducer

// (prevState,action) => newState
const initialState = {
  numOfCakes: 10
}

const reducer = (state = initialState , action) =>{
  switch(action.type){
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes - 1
    }
    default : return state
  }
}
