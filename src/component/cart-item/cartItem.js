import React from 'react'
import './cartItem.scss'


const CartItem = (props) => {
    return (
        <div className="cart-item">
            <img src={props.imgUrl} alt="item" />
            <div className="item-details">
                <span className="name">{props.name}</span>
                <span className="price">{props.quantity} X ${props.price}</span>

            </div>
        </div>
    )
    
}


export default CartItem