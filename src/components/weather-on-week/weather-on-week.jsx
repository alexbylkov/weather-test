import React from 'react'

import { dateFormatterLong } from '../../helpers'
import { WeatherOnWeekItem } from '../weather-on-week-item'

import './weather-on-week.sass'

export const WeatherOnWeek = ({tab, weatherArr}) => {

  const startDate = dateFormatterLong(weatherArr[0].dt)
  const endDate = dateFormatterLong(weatherArr[weatherArr.length - 1].dt)
  
  return (
    <div className="weather-on-week">
      <h1 className="weather-on-week__tab">{tab}</h1>
      <h2>{startDate} - {endDate}</h2>
      <div className="weather-on-week__wrapper">
        {
          weatherArr.map(item => <WeatherOnWeekItem key={item.dt} weather={item} />)
        }
      </div>
    </div>
  )
}