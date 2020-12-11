import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './pages/homepage/home-page'
import Directory from './component/directory.styles/directory.styles'
import {Route} from 'react-router-dom'
import ShopPage from './pages/shop/chopcomponent';
import Header from './component/header-component/header'
import Sign from './pages/register/regist'
import {auth, createUserProfile, addCollectionAndDocuments} from './firebase/firebase.utiliti'
import {BrowserRouter as Router, Redirect, Switch } from 'react-router-dom'
import {connect} from 'react-redux'
import {setUser} from '../src/store/action/user'
import Icon from './component/cart-icon/cart-icon'
import Checkout from '../src/pages/checkout/checkout'
import CategoryPage from '../src/pages/category/category'
import {selectorColelctionsForPreview} from './pages/category/cateselector'
import { createStructuredSelector } from 'reselect';
import {selectCurrentUser} from './userselect'

class App extends Component {


  unsubscribeFromAuth = null

  componentDidMount() {
    const {collectionsArray} = this.props

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
      }
      this.props.setUser(user)
      console.log(collectionsArray)
      addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items }) ))
      

     
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
        <switch>

        
    <Route exact path="/" component={Homepage} />
    <Route exact path="/cart" component={Icon} />
    <Route exact path="/shop" component={ShopPage} />
    <Route exact path="/shop/:categoryId" component={CategoryPage} />
    <Route exact path="/checkout" component={Checkout} />
    <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to="/" />) : <Sign />} />
       </switch>
    </Router>

    </div>

    
  );
  }
  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectorColelctionsForPreview
});


const mapDispatchToProps = dispatch => {
  return {
    setUser : user => dispatch(setUser(user))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);






