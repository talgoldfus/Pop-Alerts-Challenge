import { combineReducers } from 'redux'
import alerts from './alertReducer.js'

const rootReducer = combineReducers({
  alerts: alerts
})

export default rootReducer
