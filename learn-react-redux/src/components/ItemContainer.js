import React from 'react'
import {connect} from 'react-redux'

import {buyCake , buyIcecream} from '../redux';

const mapStateToProps = (state , ownProps) => {
  const itemState = ownProps.cake ? state.cake.numOfCakes : state.icecream.numOficeCreams ;
  return {
    item : itemState
  }

}

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFun = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIcecream())
  return {
    buyItem : dispatchFun
  }
}

function ItemContainer(props) {
  return (
    <div>
      <h1>Item - {props.item}</h1>
      <button onClick={props.buyItem}>Buy Item</button>
    </div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer);