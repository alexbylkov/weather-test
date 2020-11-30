import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import ReduxThunk from 'redux-thunk'

import { history } from '../helpers'
import { rootReducer } from './reducers/rootReducer'

const middlewares = [ReduxThunk, routerMiddleware(history)]

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const enhancer = composeEnhancers(applyMiddleware(...middlewares))

const store = createStore(rootReducer(history), enhancer)

export default store