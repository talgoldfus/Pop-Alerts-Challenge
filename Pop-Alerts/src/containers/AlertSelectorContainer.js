import React,{ Component }from 'react';
import { connect } from 'react-redux'
import changeFilter from '../actions/changeFilter'
import classNames from 'classnames'

class AlertSelector extends Component {
  constructor(props){
    super(props)
    this.state ={clicked: false}
    this.handleClick.bind(this)
  }

  handleClick(event,filter,pressed){
    event.preventDefault()
    this.props.changeFilter(filter)
    this.setState({clicked:pressed})
  }

  render(){
      var popularBtnClass = classNames({
        'btn': true,
        'selector':true,
        'btn-pressed': this.state.clicked ==='popular'
      })

      var yourBtnClass = classNames({
        'btn': true,
        'selector':true,
        'btn-pressed': this.state.clicked ==='your'
      })

    return (
      <div className="row">
        <div className="col-xs-4 col-xs-offset-4" >
        <div className="alertsSelector btn-group">
            <button
              className={popularBtnClass}
              type="button"
              onClick={event=>this.handleClick(event,"SHOW_POPULAR_ALERTS","popular")}>
              Popular Alerts
            </button>
            <button
              className={yourBtnClass}
              type="button"
              onClick={event=>this.handleClick(event,"SHOW_YOUR_ALERTS","your")}>
              Your Alerts
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const AlertSelectorContainer = connect(null,{changeFilter})(AlertSelector)
export default AlertSelectorContainer
