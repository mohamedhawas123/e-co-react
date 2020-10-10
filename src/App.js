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


class App extends Component {

  state ={
    currentUser: null
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async user => {
      if(user) {
        const userRef = await createUserProfile(user)
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })


      }else {
        this.setState({currentUser:user})
      }
      
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }




  render() {
    return (
      
      <div >
        <Header currentUser={this.state.currentUser} />
    <Route exact path="/" component={Homepage} />
    <Route exact path="/shop" component={ShopPage} />
    <Route exact path="/signin" component={Sign} />
   
    </div>

    
  );
  }
  
}

export default App;
