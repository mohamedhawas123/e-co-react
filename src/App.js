import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './pages/homepage/home-page'
import Directory from './component/directory.styles/directory.styles'
import {Route} from 'react-router-dom'
import ShopPage from './pages/shop/chopcomponent';
import Header from './component/header-component/header'
import Sign from './pages/register/regist'
import {auth, createUserProfile} from './firebase/firebase.utiliti'
import {BrowserRouter as Router, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import {setUser} from '../src/store/action/user'
import Icon from './component/cart-icon/cart-icon'

class App extends Component {


  unsubscribeFromAuth = null

  componentDidMount() {

    console.log(this.props.currentUser)
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async user => {
      if(user) {
        const userRef = await createUserProfile(user)
        userRef.onSnapshot(snapShot => {
          this.props.setUser({
          id: snapShot.id,
          ...snapShot.data()
        })
        })

        


      }else {
        this.props.setUser(user)
      }

     
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }




  render() {
    return (
      
      <div >
         <Router>
        <Header />
    <Route exact path="/" component={Homepage} />
    <Route exact path="cart" component={Icon} />
    <Route exact path="/shop" component={ShopPage} />
    <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to="/" />) : <Sign />} />
    </Router>
   
    </div>

    
  );
  }
  
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser
  }
}


const mapDispatchToProps = dispatch => {
  return {
    setUser : user => dispatch(setUser(user))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);




