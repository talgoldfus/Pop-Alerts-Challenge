import React from 'react'
import { Link } from 'react-router'

const NavBar = ()=>{
    return (
      <div className="row navBar">
        <div className="col-xs-offset-2 col-xs-7 col-md-offset-2 col-md-8">
          <h1>POP ALERTS</h1>
        </div>
        <div className="col-xs-3 col-md-2">
          <Link to="/">
            <img id="menuIcon" src={require('../assets/images/menu-icon-01.png')} alt="menuIcon"/>
          </Link>
        </div>
      </div>
    )
}

export default NavBar
