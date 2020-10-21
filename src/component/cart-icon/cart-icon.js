import React from 'react'
import './cart-icon.scss'
import {connect} from 'react-redux'
import {ReactComponent as Shopping } from '../../assets/shopping.svg'
import {Dropstart} from '../../store/action/dropdown'


const Icon = (props) => (
    <div className="cart-icon" onClick={props.dropopen}>
        <Shopping className="shopping-icon" />
        <span className="item-count">0</span>
    </div>

)

const mapDispatchToProps = dispatch => {
    return {
        dropopen: () => dispatch(Dropstart()),
    }
}


export default connect(null,mapDispatchToProps) (Icon)