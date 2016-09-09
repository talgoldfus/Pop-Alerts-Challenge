import { connect } from 'react-redux'
import AlertRows from '../components/AlertRows'

function mapStateToProps(state) {
    return {
      alerts: state.alerts
    }
}

const AlertRowsContainer = connect(mapStateToProps, null)(AlertRows)

export default AlertRowsContainer
