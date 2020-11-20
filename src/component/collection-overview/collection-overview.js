import React from 'react';
import CollectionPreve from '../../component/previewCollection/previewCollectionCom'
import {connect} from 'react-redux'
import {selectorColelctionsForPreview} from '../../pages/category/cateselector'
const CollectionOverview = (props) => (
    <div className="collection-overview">
         {props.shop.map(item => (
                <CollectionPreve title={item.title} items={item.items} />
            ))}
    </div>
)

const mapStateToProps = (state) => {
    return {
        shop: selectorColelctionsForPreview(state)
    }
}


export default connect(mapStateToProps)(CollectionOverview)