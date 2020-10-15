import React from 'react'
import * as actionType from '../action/actionType'
import {updateObject} from '../utilty'

export const inialState =  {
    currentUser: null,
    error: null
}

export const UserStart = (state, action) => {
    return updateObject(state, {
        currentUser: null
    })
}


export const UserSucess = (state, action) => {
    return updateObject(state, {
        currentUser: action.currentUser
    })
}


export const UserFail = (state, action) => {
    return updateObject(state, {
        currentUser: null,
        error: action.error
    })
}


const reducer = (state=inialState, action) => {
    switch(action.type) {
        case actionType.USER_START: return UserStart(state, action)
        case actionType.USER_SUCCESS: return UserSucess(state, action)
        case actionType.USER_FAIL: return UserFail(state, action)
        default:
            return state
    }
}

export default reducer