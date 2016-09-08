import { combineReducers } from 'redux'
import alertBoard from './alertBoard.js'

const rootReducer = combineReducers({
  alertBoard: alertBoard
})

export default rootReducer
