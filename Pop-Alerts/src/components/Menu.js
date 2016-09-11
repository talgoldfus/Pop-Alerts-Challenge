import React from 'react';
import {Link} from 'react-router'


const Menu = (props)=>{
    const classes = "menuBtn col-md-8"
    return (
    <div className="row" >
      <div className="col-md-offset-9 col-md-2 menu">
          <div className="row" >
              <Link to="/policy" className={classes} onClick={props.display}>Privacy Policy</Link>
  </div>
  <div className="row" >
              <Link to="/terms" className={classes} onClick={props.display}>Terms of Use</Link>
  </div>
  <div className="row" >
            <Link to="/settings" className={classes} onClick={props.display}>Settings</Link>
  </div>
  <div className="row" >
              <Link to="/logout" className={classes} onClick={props.display}>Logout</Link>
        </div>
      </div>
    </div>
    )
}

export default Menu
