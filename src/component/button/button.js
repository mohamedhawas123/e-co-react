import React from 'react'
import './button.scss'
import {signInWithGoogle} from '..//../firebase/firebase.utiliti'


const Button = props => (
    <button className={` ${props.inverted ? 'inverted' : ''} custom-button ${props.isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} onClick={props.click} value={props.value}>
        {props.children}

    </button>
)

export default Button;