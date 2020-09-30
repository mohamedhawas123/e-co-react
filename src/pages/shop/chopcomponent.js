import React, { Component } from 'react'
import {SHOP_DATA} from './datashop'
import CollectionPreve from '../../component/previewCollection/previewCollectionCom'


class ShopPage extends Component {

    state = {
        collection: SHOP_DATA
    }


    render() {
        return (
            <React.Fragment>
                 {this.state.collection.map(item => (
                <CollectionPreve title={item.title} items={item.items} />
            ))}
            </React.Fragment>
           
            
        )
    }
}

export default ShopPage