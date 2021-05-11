import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {buyIcecream} from '../redux';



export default function HookIceCream() {
  const numberOfIceCreams = useSelector(state => state.icecream.numOficeCreams);
  const dispatch = useDispatch();


  return (
    <div>
      <h3>Num of icecream {numberOfIceCreams} </h3>
      <button onClick={() => dispatch(buyIcecream())}  >Buy a IceCream </button>
    </div>
  )
}
