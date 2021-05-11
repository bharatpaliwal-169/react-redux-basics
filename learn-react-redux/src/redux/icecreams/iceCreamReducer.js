import { BUY_ICECREAM } from './iceCreamType';
const initialState = {
  numOficeCreams : 20
}

const IceCreamReducer = (state = initialState , action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return{
        ...state,
        numOficeCreams: state.numOficeCreams - 1,
      }
    default : return state
  }

}

export default IceCreamReducer;
