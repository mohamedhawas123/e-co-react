import react from 'react'
import * as actionType from './actionType'

export const UserStart = () => {
    return {
         type: actionType.USER_START
    }
   
}


export const UserSucess = (currentUser) => {
    return {
        type: actionType.USER_SUCCESS,
        currentUser: currentUser
    }
    
}


export const UserFail = (error) => {
    return {
         type: actionType.USER_FAIL,
         error: error
    }
   
}


export const setUser = user => {
    return dispatch => {
       
        dispatch(UserSucess(user))
    }
}