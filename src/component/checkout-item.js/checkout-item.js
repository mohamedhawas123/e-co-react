import React from 'react'
import './checkout-item.scss'
import {connect} from 'react-redux'
import {clearItem} from '../../store/action/dropdown'
import {clearOneItem, addtoCart} from '../../store/action/dropdown'

const CheckoutItem = (props) => {
    console.log(props.item)
 return (
    
    <div className="checkout-item">
        <div  className="image-container">
            <img src={props.imgURl} alt="item" />

        </div>
        <span className="name">{props.name}</span>
        <span className="quantity">
            <div onClick={() => props.remove(props.item)} className="arrow">&#10094;</div>
           <span className="value">{props.quantity}</span> 
            <div onClick={() => props.add(props.item)} className="arrow">&#10095;</div>

            </span> 
        <span className="price">{props.price}</span>
        <span onClick={() => props.clear(props.item)} className="remove-button">&#10005;</span>
    </div>
)
} 


const mapDispatchToProps = dispatch => {
    return {
        clear: item => dispatch(clearItem(item)),
        add: item => dispatch(addtoCart(item)),
        remove: item => dispatch(clearOneItem(item)),
    }
}

export default connect(null, mapDispatchToProps)(CheckoutItem);
