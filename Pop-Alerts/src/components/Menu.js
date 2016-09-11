import React from 'react';
import {Link} from 'react-router'


const Menu = ()=>{
    return (
    <div className="row" >
      <div className="col-md-offset-9 col-md-2 menu">
          <div className="row" >
              <Link to="/policy" className="menuBtn col-md-8">Privacy Policy</Link>
              <Link to="/terms" className="menuBtn col-md-8">Terms of Use</Link>
              <Link to="/settings" className="menuBtn col-md-8">Settings</Link>
              <Link to="/logout" className="menuBtn col-md-8">Logout</Link>
        </div>
      </div>
    </div>
    )
}

export default Menu
