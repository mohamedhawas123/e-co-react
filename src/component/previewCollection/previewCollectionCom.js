import React from 'react'
import './previewCollectionstyle.scss'
import CollectionItem from '../collectionitem/collectionitem'


const CollectionPreve = (props) => (
    <div className="collection-preview">
        <h1 className="title">{props.title.toUpperCase()}</h1>
        <div className="preview">
            {props.items.filter((item, idx) => idx < 4).map(item => (
                <CollectionItem key={item.id} imageUrl={item.imageUrl} name={item.name} price={item.price} />
            ))}
        </div>
    </div>
)

export default CollectionPreve
