import React,{ Component } from 'react';
import { connect } from 'react-redux'
import searchAlert from '../actions/searchAlert'

class SearchBar extends Component {
    constructor(props){
      super(props)
      this.handleSubmit.bind(this)
    }

    handleSubmit(event){
      event.preventDefault()
      this.props.searchAlert(this.refs.search.value.trim())
      this.refs.search.value=""
    }

    render(){
    return (
        <div className="row">
          <div className="col-xs-offset-1 col-xs-10 ">
            <div className="row searchBar">
              <form className="search" onSubmit={ event =>this.handleSubmit(event)}>
                <input ref='search' type="text" placeholder="Find Alerts" />
              </form>
            </div>
           </div>
         </div>
    )
  }
}

const SearchBarContainer = connect(null,{searchAlert})(SearchBar)
export default SearchBarContainer
