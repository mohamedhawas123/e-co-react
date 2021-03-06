import React from 'react'
import './menu-item.scss'
import {withRouter} from 'react-router-dom'


const MenuItem = (props) => {

    
    return (
        <React.Fragment>
            
             <div 
               className={`${props.size} menu-item`} onClick={() => props.history.push(`${props.url}`)}  >

            <div className="background-image" style={{
                backgroundImage: `url(${props.img})` 
            }}  />
            <div className="content">
                <h1 className="title">{props.title.toUpperCase()}</h1>
                <span className="subtitle">Shop NOW</span>
               
            </div>
        </div>
        </React.Fragment>
       
    )
}

export default withRouter(MenuItem)