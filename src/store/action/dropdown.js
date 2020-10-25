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

export const clearIt = item => {
    return {
        type: actionType.CLEAR_ITEM,
        item : item
    }
}

export const clearItem = item => {
    return dispatch => {
        dispatch(clearIt(item))
    }
}

export const clearI = item => {
    return {
        type: actionType.REMOVE_ITEM,
        item : item
    }
}

export const clearOneItem = item => {
    return dispatch => {
        dispatch(clearI(item))
    }
}







