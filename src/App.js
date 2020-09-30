import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './pages/homepage/home-page'
import Directory from './component/directory.styles/directory.styles'
import {Route} from 'react-router-dom'
import ShopPage from './pages/shop/chopcomponent';


function App() {
  return (
    
      <div >
    <Route exact path="/" component={Homepage} />
    <Route exact path="/shop" component={ShopPage} />
   
    </div>

    
  );
}

export default App;
