import {combineReducers} from 'redux';

import cakeReducer from './cakes/cakeReducer';
import iceCreamReducer from './icecreams/iceCreamReducer';

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream : iceCreamReducer,
})

export default rootReducer;
