import React,{ Component } from 'react';

class SearchBar extends Component {

    click(event){
      event.preventDefault()
      console.log(event)
    }

    render(){
    return (
      <div className="searchBar">
        <form onSubmit={this.click.bind(this)}>
           <input id="search" type="text" placeholder="Find Alerts" />
           <span><img alt="search-icon" src="../images/search-icon-01.svg" /></span>
         </form>
      </div>
    )
  }
}


export default SearchBar
