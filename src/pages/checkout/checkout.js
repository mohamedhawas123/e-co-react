import React from 'react'
import './checkout.scss'
import {connect} from 'react-redux'
import CheckoutItem from '../../component/checkout-item.js/checkout-item'
import StripeCheckoutButton from '../../component/stripe-button/stripe-button'

const Checkout = (props) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>

                <div className="header-block">
                    <span>Description</span>
                </div>


                <div className="header-block">
                    <span>Quantity</span>
                </div>


                <div className="header-block">
                    <span>Price</span>
                </div>

                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {props.cartItem.map(item => (
                <CheckoutItem
                    name={item.name}
                    item={item}
                    price={item.price}
                    imgURl={item.imageUrl}
                    quantity={item.quantity}
                 />
            ))}

            <div className="total">
                <span>TOTAL: ${props.cartItemTotal}</span>
                <StripeCheckoutButton price={props.cartItemTotal} />
            </div>
                
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cartItem : state.dropdown.cartitem,
        cartItemTotal: state.dropdown.cartitem.reduce((itemqu, item) => itemqu + item.quantity *item.price, 0)

    }
}

const mapDispatchToProps = dispatch => {
    return {
        //
    }
}


export default connect(mapStateToProps)(Checkout)