import {combineReducers} from 'redux';

import cakeReducer from './cakes/cakeReducer';
import iceCreamReducer from './icecreams/iceCreamReducer';
import reducer from './users/reducer';

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream : iceCreamReducer,
  users : reducer
})

export default rootReducer;
