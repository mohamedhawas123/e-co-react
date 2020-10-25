import React from 'react'
import './cartdrop.scss'
import Button from '../button/button'
import CartItem from '../cart-item/cartItem'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom';
import {Dropstart} from '../../store/action/dropdown'



const Cartdrop = (props) => (
    
    <div className="cart-dropdown">
        <div className="cart-items">
            

            {
            props.cartItem.length > 0 ?
            props.cartItem.map(item => (
                <CartItem key={item.id} 
               
                imgUrl={item.imageUrl} 
                name={item.name}
                quantity={item.quantity}
                price={item.price} />
            )):
            <span className="empty-message">Your cart is empty</span>
            
            }

        </div>
                
        <Button click={() => {props.hide(); props.history.push("/checkout");}} >Go To CHECKOUT</Button>
            
        
    </div>
)

const mapStateToProps = state => {
    return {
        cartItem: state.dropdown.cartitem
    }
}

const mapDispatchToProps = dispatch => {
    return {
        hide: () => dispatch(Dropstart())
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cartdrop))