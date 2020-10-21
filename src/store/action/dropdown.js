import React from 'react'
import * as actionType from './actionType'

export const Dropstart  = () => {
    return {
        type: actionType.Drop_START
    }
}


export const cartItem = cartitem => {
    return {
        type: actionType.CART_ITEM,
        cartitem: cartitem
    }
}


export const addtoCart = (cartitem) => {
    return dispatch => {
        dispatch(cartItem(cartitem))
    }
}





