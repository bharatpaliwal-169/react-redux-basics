import {FETCH_USER_REQUEST,
        FETCH_USER_SUCCESS,
        FETCH_USER_FAILED} from './types';
import axios from 'axios';

export const FetchUserRequest = () => {
  return {
    type : FETCH_USER_REQUEST
  }
}

export const FetchUserSuccess = (users) => {
  return {
    type : FETCH_USER_SUCCESS,
    payload : users
  }
}

export const FetchUserFailed = (error) => {
  return {
    type : FETCH_USER_FAILED,
    payload : error
  }
}

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(FetchUserRequest())
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const users = response.data
        dispatch(FetchUserSuccess(users))
      })
      .catch(error => {
        dispatch(FetchUserFailed(error.message))
      })
  }
}