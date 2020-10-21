import React from 'react'
import './collectionitemstyle.scss'
import Button from '../button/button'
import {addtoCart} from '../../store/action/dropdown'
import {connect} from 'react-redux'

const CollectionItem = (props) => (
    <div className="collection-item">
        <div className="image" style={{backgroundImage: `url(${props.imageUrl})`}} />
        <div className="collection-footer">
            <span className="name">{props.name}</span>
            <span className="price">{props.price}</span>
        </div>
        <Button click={item => props.addtocart(props.item)} inverted>Add to Cart</Button> 
    </div>
)


const mapDispatchToProps = (dispatch) => {
    return {

        addtocart : cartitem => dispatch(addtoCart(cartitem))

    }
}


export default connect(null, mapDispatchToProps) (CollectionItem);