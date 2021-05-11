import React,{useState} from 'react'
import {useSelector , useDispatch} from 'react-redux';
import {buyCake} from '../redux';

export default function NewCake() {

  const [number,setNumber] = useState(1);

  const numOfCakes = useSelector(state => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Available Cakes - {numOfCakes}</h1>
      <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
      <button onClick={() => dispatch(buyCake(number))} >Buy {number} Cakes</button>
    </div>
  )
}