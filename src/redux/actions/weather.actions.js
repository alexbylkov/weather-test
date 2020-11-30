import { push } from 'connected-react-router';
import { postGeolocation, getDataByPlaceId } from '../../services/google-api'
import { getWeatherData } from '../../services/weather-api'
import { postCityInStorage, getCityList } from '../../services/local-storage'

import {
  INITIALIZE_LOCATION_WEATHER,
  LOADING_LOCATION_WEATHER,
  LOADING_CURRENT_CITY_WEATHER,
  SUCCESS_CURRENT_CITY_WEATHER,
  SUCCESS_SAVE_CITY_WEATHER
} from '../types/weather.types.js'

export const getInitialLocation = () => {

  const defaultId = 'ChIJybDUc_xKtUYRTM9XV8zWRD0'

  const initialLocationLoading = () => ({
    type: LOADING_LOCATION_WEATHER
  })

  const initialLocation = id => ({
    type: INITIALIZE_LOCATION_WEATHER,
    id
  })

  return dispatch => {
    dispatch(initialLocationLoading())
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(res => {
        const {latitude, longitude} = res.coords
        postGeolocation(latitude, longitude)
          .then(res => dispatch(initialLocation(res)))
          .catch(() => dispatch(initialLocation(defaultId)))
      }, () => dispatch(initialLocation(defaultId)))
    } else {
      dispatch(initialLocation(defaultId))
    }
  }
}

export const getFullDataById = id => {

  const loadingCurrentCity = () => ({
    type: LOADING_CURRENT_CITY_WEATHER
  })

  const successCurrentCity = data => ({
    type: SUCCESS_CURRENT_CITY_WEATHER,
    data
  })
  
  return async dispatch => {
    try {
      dispatch(loadingCurrentCity())
      const dataLocation = await getDataByPlaceId(id)
      const cityName = dataLocation.formatted_address
      const location = dataLocation.geometry.location
      const weather = await getWeatherData(location)
      dispatch(successCurrentCity({cityName, location, weather}))
    } catch(e) {
      dispatch(push('/'))
    }
  }
}

const successSaveCity = city => ({
  type: SUCCESS_SAVE_CITY_WEATHER,
  city
})

export const initCityList = () => {
  const cityArr = getCityList()
  return successSaveCity(cityArr)
} 

export const saveCity = city => {
  const cityArr = postCityInStorage(city)
  return successSaveCity(cityArr)
}
