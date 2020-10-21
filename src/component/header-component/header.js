import React from 'react';
import './header.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../../src/assets/crown.svg'
import {auth} from '../../firebase/firebase.utiliti'
import {connect} from 'react-redux'
import Icon from '../cart-icon/cart-icon'
import Cartdrop from '../cartdropdown/cartdrop'



const Header = (props) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"  />
        </Link>
        
        <div className="options">
            <Link className="option" to="/shop">
                Shop
            </Link>

            <Link className="option" to="/contact">
                Contact
            </Link>
           
           {props.currentUser ?
           <div className="option" onClick={() => auth.signOut()}>Sign Out</div> :
           <Link className="option" to="/signin">
                Sign in
            </Link>

           }
           <Icon />

        </div>
           {
               props.hide ? null : <Cartdrop />
           }
        
        
    </div>
)

const mapStateToProps = state => {
    return {
      currentUser: state.user.currentUser,
      hide: state.dropdown.hidden
    }
  }
  
  
  
export default connect(mapStateToProps)(Header);


