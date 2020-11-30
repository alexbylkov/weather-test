import React, { useState } from 'react'
import {Map, InfoWindow, Marker} from 'google-maps-react'

import { getTemp, getWeatherStr } from '../../helpers'
import icon from './marker.png'

export const GoogleMap = ({ location, weatherCurrent }) => {

  const [ isOpenWindow, setIsOpenWindow ] = useState(false)
  const [ activeMarker, setActiveMarker ] = useState({})

  const onMarkerClick = (_, marker) => {
    setActiveMarker(marker)
    setIsOpenWindow(true)
  }

  const onMapClicked = () => {
    if (isOpenWindow) {
      setIsOpenWindow(false)
      setActiveMarker(null)
    }
  }

  return (
    <Map 
      google={window.google}
      zoom={14}
      initialCenter={location}
      onClick={onMapClicked}
    >
      <Marker
        position={location}
        onClick={onMarkerClick} 
        options={{ icon }}
      />
      <InfoWindow
        marker={activeMarker}
        visible={isOpenWindow}
      >
        <div className="weather-on-day__map-window">
          <span>{getTemp(weatherCurrent.temp)}</span>
          <div>{getWeatherStr(weatherCurrent)}</div>
        </div>
      </InfoWindow>
    </Map>
  )
}