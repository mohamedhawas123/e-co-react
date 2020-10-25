import React from 'react'
import './cart-icon.scss'
import {connect} from 'react-redux'
import {ReactComponent as Shopping } from '../../assets/shopping.svg'
import {Dropstart} from '../../store/action/dropdown'
import {selectCartItemsCount} from '../../store/reducer/cartselect'

const Icon = (props) => (
    <div className="cart-icon" onClick={props.dropopen}>
        <Shopping className="shopping-icon" />
        <span className="item-count">{props.itemCount}</span>
    </div>

)


const mapStateToProps = state => {
    return {
        itemCount:selectCartItemsCount(state)
     // itemCount: state.dropdown.cartitem.reduce( (quantity, cartItem) => quantity + cartItem.quantity, 0 )
     

    }
}

const mapDispatchToProps = dispatch => {
    return {
        dropopen: () => dispatch(Dropstart()),
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (Icon)