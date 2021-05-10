import React from 'react';
import {connect} from 'react-redux';
import  {buyCake} from '../redux';


const mapStateToProps = (state) => {
  return {
    numOfCakes : state.numOfCakes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}


function CakeContainer(props) {
  return (
    <div>
      <h2>Cakes {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);