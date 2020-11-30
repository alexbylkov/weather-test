import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import { weather } from './weather.reducer'

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  weather
})

export { rootReducer }