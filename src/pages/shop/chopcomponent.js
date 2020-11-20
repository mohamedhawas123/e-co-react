import React, { Component } from 'react'
import {SHOP_DATA} from './datashop'
import CollectionPreve from '../../component/previewCollection/previewCollectionCom'
import {connect} from 'react-redux'
import CollectionOverview from '../../component/collection-overview/collection-overview'
import {Route} from 'react-router-dom'
import CategoryPage from '../../pages/category/category'
import {BrowserRouter as Router, Redirect } from 'react-router-dom'

const ShopPage = (props) => {

        return (
            
            <div className="shop-page">


                <Route exact path={`${props.match.path}`} component={CollectionOverview} />
                <Route path={`${props.match.path}/:categoryId`} component={CategoryPage} />

           
            </div>
           
            
        )
    
}




export default ShopPage