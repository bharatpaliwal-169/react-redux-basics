import React from 'react'
import {useSelector , useDispatch} from 'react-redux';
import {buyCake} from '../redux';

export default function HookCake() {
  const numOfCakes = useSelector(state => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>No  of Cakes - {numOfCakes}</h1>
      <button onClick={() => dispatch(buyCake())} >Buy A Cake</button>
    </div>
  )
}