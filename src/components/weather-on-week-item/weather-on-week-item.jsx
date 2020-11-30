import React from 'react'

import { getTemp, dateFormatterShort } from '../../helpers'

export const WeatherOnWeekItem = ({ weather }) => {

  const timesOfDay = [
    { value: 'day', label: 'Day' },
    { value: 'eve', label: 'Evening' },
    { value: 'morn', label: 'Morning' },
    { value: 'night', label: 'Night' }
  ]

  const timesOfDayWithTemp = timesOfDay.map(day => {
    let temp
    for(let t in weather.temp) {
      if (t === day.value) {
        temp =  weather.temp[t]
      }
    }
    return { ...day, temp }
  })

  return (
    <div className="weather-on-week__item">
      <h4 className="weather-on-week__date">{dateFormatterShort(weather.dt)}</h4>
      <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="icon"/>
      <ul>
        {timesOfDayWithTemp.map(day => 
          <li className="weather-on-week__temp-text" key={day.value}>
            <span>{day.label}:</span>
            <span className="weather-on-week__temp">{getTemp(day.temp)}</span>
          </li>
        )}
      </ul>
    </div>
  )
}