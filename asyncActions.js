const redux = require('redux');
const createStore  = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const axios = require('axios');

const thunkMiddleware = require('redux-thunk').default;

//state
const initialState = {
  loading : true,
  data : [],
  error : 'Error in fetching data',
}

//action
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

//action creaters
const FetchUserRequest = () => {
  return {
    type : FETCH_USERS_REQUEST
  }
}

const FetchUserSuccess = (data) => {
  return {
    type : FETCH_USERS_SUCCESS,
    payload : data
  }
}

const FetchUserFailure = (error) => {
  return {
    type : FETCH_USERS_REQUEST,
    payload : error
  }
}

//thunk allowed us to return a function instead of an object
const FetchUsers = () => {
  return function(dispatch){
    dispatch(FetchUserRequest())
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // response.data is the users
        const users = response.data.map(user => user.id)
        dispatch(FetchUserSuccess(users))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(FetchUserFailure(error.message))
      })
  }
}



//reducer

const reducer = (state = initialState,action) => {
  switch(action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading : true
      }
    case FETCH_USERS_SUCCESS:
      return {
        loading : false,
        data : action.payload,
        error : " No error "
      }
    case FETCH_USERS_FAILED:
      return {
        loading : false,
        data : [],
        error : action.payload
      }
  }
}



//store

const store = createStore(reducer,applyMiddleware(thunkMiddleware));
store.subscribe(() => { console.log(store.getState()) })
store.dispatch(FetchUsers())