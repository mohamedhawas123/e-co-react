import React, {Component} from 'react'
import './signup.scss'
import Input from '../../component/input-form/input-form'
import Button from '../../component/button/button'
import {auth, createUserProfile} from '../../firebase/firebase.utiliti'


class Signup extends Component {

    state = {
        displayName : "",
        email : "",
        password : "",
        confirmpassword : ""
    }

    handlechange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handlesubmit = async e => {
        e.preventDefault()
        const {displayName, email, password, confirmpassword  } = this.state;
        if (password !== confirmpassword) {
            alert("Password Must Match")
            return;

        }

        try {
            const {user} =  await auth.createUserWithEmailAndPassword(email, password)
          await   createUserProfile(user, {displayName})
          await this.setState({
            displayName : "",
            email : "",
            password : "",
            confirmpassword : ""
          })
        }catch(error) { 
            console.error(error)
        }

    }


    render() {
        const {displayName, email, password, confirmpassword  } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title"> I do not have a account  </h2>
                <span>Sign up with email and password</span>
                <form className="sign-up-form" onSubmit={this.handlesubmit} >
                    <Input change={this.handlechange} 
                    type="text"
                     name="displayName"
                      value={displayName}
                       label="Display Name"></Input>

                    <Input change={this.handlechange} 
                    type="email"
                     name="email"
                      value={email}
                       label="Email"></Input>

                    <Input change={this.handlechange} 
                    type="password"
                     name="password"
                      value={password}
                       label="Password"></Input>

                    <Input change={this.handlechange} 
                    type="password"
                     name="confirmpassword"
                      value={confirmpassword}
                       label="Confirm Password"></Input>

                    <Button type="submit"> Sign Up </Button>
                </form>
            </div>
        )
    }
}


export default Signup;