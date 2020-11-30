import React from 'react'

import { dateFormatterLong, getTime, getWeatherStr, getTemp } from '../../helpers'
import { GoogleMap } from '../google-map'

import './weather-on-day.sass'

export const WeatherOnDay = ({ tab, weatherArr, weatherArrShort, location, weatherCurrent }) => (
  <div className="weather-on-day">
    <div className="weather-on-day__info">
      <h1 className="weather-on-day__tab">{tab}</h1>
      <h2>{dateFormatterLong(weatherArr[0].dt)}</h2>
      <table className="weather-on-day__table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Weather</th>
          </tr>
        </thead>
        <tbody>
        {
          weatherArrShort.map(item => 
            <tr key={item.dt}>
              <td>{getTime(item.dt)}</td>
              <td>{getTemp(item.temp)} {getWeatherStr(item)}</td>
            </tr>
          )
        }
        </tbody>
      </table>
    </div>
    <div className="weather-on-day__map">
      <GoogleMap location={location} weatherCurrent={weatherCurrent} />
    </div>
  </div>
)