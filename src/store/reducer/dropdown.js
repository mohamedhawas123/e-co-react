import React from 'react'
import * as actionType from '../action/actionType'
import {updateObject} from '../utilty'
import {addItemToCart} from '../cartutilty'

const initalState = {
    hidden: true,
    cartitem : []
}


const dropState = (state, action) => {
    return updateObject(state, {
        hidden: !state.hidden
})
}


// const cartItem = (state, action) => {
  //   console.log(state.cartitem)
    
  //   return updateObject(state, {
  //       cartItem:  addItemToCart(state.cartitem, action.cartitem)
  //   })
// }



const reducer = (state=initalState, action) => {
    switch(action.type) {
        case actionType.Drop_START: return dropState(state, action)
        case actionType.CART_ITEM : return {
            ...state,
            cartitem: addItemToCart(state.cartitem, action.cartitem)
          };
       
        default:
            return state
    }
}

export default reducer


