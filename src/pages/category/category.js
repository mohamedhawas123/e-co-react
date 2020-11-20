import React from 'react'
import './category.scss'
import CollectionItem from '../../component/collectionitem/collectionitem'
import {connect} from 'react-redux'
import {selectCollection} from './cateselector'

const collection_id_map = {
    hats: 1,
    sneakers:2,
    jackets:3,
    womens:4,
    mens:5
}


const CategoryPage = ({collection}) => {
    const {title, items} = collection
    console.log(collection)
    return (
        
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {items.map(item => (
                    <CollectionItem key={item.id} imageUrl={item.imageUrl}
                     name={item.name}
                     price={item.price}
                     item={item}
                     />
                ))}
            </div>
        </div>
        
    )
}


const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.categoryId)(state)
  });
  

export default connect(mapStateToProps)(CategoryPage);