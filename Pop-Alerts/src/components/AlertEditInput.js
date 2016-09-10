import React ,{ Component }from 'react';
class AlertEditInput extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text: this.props.value || ''
    }
  }

  handleSubmit(event){
      const text = event.target.value.trim()
      if (event.which === 13){
          this.props.save(text)
      }
    }

  handleChange(event) {
    this.setState({ text: event.target.value })
    }

    render(){
      return (
        <div>
            <input
            className="col-md-12 text"
            type="text"
            value={this.state.text}
            onChange={this.handleChange.bind(this)}
            onKeyDown={this.handleSubmit.bind(this)}
            autoFocus="true"
            />
        </div>
    )
  }
}

export default AlertEditInput
