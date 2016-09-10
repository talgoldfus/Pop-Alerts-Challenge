import React,{ Component } from 'react';

class SearchBar extends Component {

    click(event){
      event.preventDefault()
      console.log(event)
    }

    render(){
    return (
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
            <div className="row searchBar">
              <input className="col-md-11 search" type="text" placeholder="Find Alerts" />
              <img className="col-md-1"alt="search-icon" rel="../images/search-icon-01.svg"/>
             </div>
         </div>
      </div>
    )
  }
}


export default SearchBar
