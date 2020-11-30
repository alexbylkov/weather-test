import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { WeatherContainer } from '../../containers/weather'
import { Loader } from '../UI/loader'
import { InitializeLocation } from '../../HOC/initialize-location'

const App = () => (
  <InitializeLocation>
    {(isLoading) => isLoading ? <Loader /> :  
      <Switch>
        <Route path="/" exact >
          <WeatherContainer />
        </Route>
        <Route path="/:city">
          <WeatherContainer />
        </Route>
      </Switch>
    }
  </InitializeLocation>
)

export { App }