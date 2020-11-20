import React, { Component } from 'react'
import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item'
import {connect} from 'react-redux'

class Directory extends Component  {


    render() {

         return (
        <div className="directory-menu">
        {this.props.dic.map(item => (
            <MenuItem title={item.title} img={item.imageUrl} size={item.size} url={item.linkUrl}  />
        ))}
                
            
        </div>
    )
    }
   
}

const mapStateToProps = state => {
  return {
    dic: state.dict.section
  }
}

export default connect(mapStateToProps)(Directory)