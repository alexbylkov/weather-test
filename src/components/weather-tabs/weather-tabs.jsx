import React from 'react'

import { getArrayToday, getArrayTomorrow } from '../../helpers'

import { WeatherOnDay } from '../weather-on-day'
import { WeatherOnWeek } from '../weather-on-week'


export const WeatherTabs = ({tab, weather, location, weatherCurrent}) => {

  const arrayToday = getArrayToday(weather.hourly)
  const arrayTodayShort = arrayToday.filter((_, i) => i % 3 === 0)

  const arrayTomorrow = getArrayTomorrow(weather.hourly)
  const arrayTomorrowShort = arrayTomorrow.filter((_, i) => i % 6 === 0)

  const arrayWeek = weather.daily.filter((_, i) => i > 0)

  switch(tab) {
    case 'today':
      return <WeatherOnDay 
        tab={tab} 
        weatherCurrent={weatherCurrent}
        weatherArr={arrayToday} 
        weatherArrShort={arrayTodayShort}
        location={location} />
    case 'tomorrow':
      return <WeatherOnDay 
        tab={tab} 
        weatherCurrent={weatherCurrent}
        weatherArr={arrayTomorrow}
        weatherArrShort={arrayTomorrowShort} 
        location={location} />
    case 'week':
      return <WeatherOnWeek 
        tab={tab} 
        weatherArr={arrayWeek} />
    default:
      return null
  }
}