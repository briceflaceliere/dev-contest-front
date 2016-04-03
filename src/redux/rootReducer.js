import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import counter from './modules/counter'
import contests from './modules/contests'

export default combineReducers({
  counter,
  contests,
  router
})
