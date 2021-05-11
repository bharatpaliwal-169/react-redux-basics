import React from 'react'
import {connect} from 'react-redux';
import {buyIcecream} from '../redux';

const mapStateToProps = (state) => {
  return {
    numOficeCreams: state.icecream.numOficeCreams,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyIcecream : () => dispatch(buyIcecream())
  }
}

const IceCream = (props) =>{
  return (
    <div>
      <h3>Num of icecream {props.numOficeCreams} </h3>
      <button onClick={props.buyIcecream}  >Buy a IceCream </button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCream);