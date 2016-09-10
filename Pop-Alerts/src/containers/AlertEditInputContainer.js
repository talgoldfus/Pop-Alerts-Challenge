import React ,{ Component }from 'react';
import { connect } from 'react-redux'
import saveEdit from '../actions/saveEdit'
class AlertEditInput extends Component {

    handleSubmit(event){
      event.preventDefault()
      this.props.saveEdit(event.target.elements[0].value ,this.props.id)
    }

    render(){
      return (
      <div className="row alert">
        <div className="col-md-12 text">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" defaultValue={this.props.value} />
          </form>
        </div>
      </div>
    )
  }

}

const AlertEditInputContainer = connect(null,{saveEdit})(AlertEditInput)
export default AlertEditInputContainer
