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
        <div className="col-md-10 col-md-offset-1">
            <div className="row searchBar">
              <form className="col-md-11 search" onSubmit={ event =>this.handleSubmit(event)}>
                <input ref='search' type="text" placeholder="Find Alerts" />
              </form>
              <span className="glyphicon glyphicon-search col-md-1" aria-hidden="true"></span>
             </div>
         </div>
      </div>
    )
  }
}

const SearchBarContainer = connect(null,{searchAlert})(SearchBar)
export default SearchBarContainer
