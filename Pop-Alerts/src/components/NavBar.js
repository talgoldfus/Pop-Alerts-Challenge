import React from 'react'
import { Link } from 'react-router'

const NavBar = ()=>{
    return (
      <div className="row navBar">
        <div className="col-xs-10">
          <h1>POP ALERTS</h1>
        </div>
        <div className="col-xs-2">
          <Link to="/">
            <img id="menuIcon" src={require('../images/menu-icon-01.png')} alt="menuIcon"/>
          </Link>
        </div>
      </div>
    )
}

export default NavBar
