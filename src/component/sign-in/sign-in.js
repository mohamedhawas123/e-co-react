import React, {Component} from 'react'
import './sign-in.scss'
import Input from '../../component/input-form/input-form'
import Button from '../../component/button/button'
import {signInWithGoogle} from '..//../firebase/firebase.utiliti'

class Signin extends Component {

    state = {
        username: "",
        password : ""
    }


   handlechange = e => {
       this.setState({[e.target.name]: e.target.value})
   }

    handlesubmit = e => {
        e.preventDefault()
        console.log(e)
    }

    render() {
        const {username, password} = this.state;
        return (
           
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handlesubmit} >
                <Input type="email" name="username" label="email" value={username} change={this.handlechange} placeholder="" />
                <Input type="password" name="password" label="password" value={password} change={this.handlechange} placeholder="" />
                <div className="buttons">
                    <Button type="submit">
                    Sign in
                </Button>
                <Button isGoogleSignIn click={signInWithGoogle} > 
                    Sign in wih Google 
                </Button>
                </div>
                
                </form>
            </div>
           
        )
    }
}

export default Signin



