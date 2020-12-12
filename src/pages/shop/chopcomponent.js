import React, { Component } from 'react'
import {SHOP_DATA} from './datashop'
import CollectionPreve from '../../component/previewCollection/previewCollectionCom'
import {connect} from 'react-redux'
import CollectionOverview from '../../component/collection-overview/collection-overview'
import {Route} from 'react-router-dom'
import CategoryPage from '../../pages/category/category'
import {BrowserRouter as Router, Redirect } from 'react-router-dom'
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utiliti'
import {updateCollection} from '../shop/shopAction'

class ShopPage extends Component  {

    unsubscribeFromsnapshot = null
    
    componentDidMount() {
        const {updateCollection} = this.props
        const collectionRef = firestore.collection('collections')

        this.unsubscribeFromsnapshot = collectionRef.onSnapshot(async snap => {
            const collectionMap = convertCollectionsSnapshotToMap(snap)
            updateCollection(collectionMap)
        })
    }

    render() {
        return (
            <div className="shop-page">

                <Route exact path={`${this.props.match.path}`} component={CollectionOverview} />
                <Route path={`${this.props.match.path}/:categoryId`} component={CategoryPage} />
           
            </div>
            
        )
    }

        
    
}


const mapDispatchToProps = dispatch => ({
    updateCollection: collectionMap => dispatch(updateCollection(collectionMap))
})

export default connect(null,mapDispatchToProps)(ShopPage)
