import {
  INITIALIZE_LOCATION_WEATHER,
  LOADING_LOCATION_WEATHER,
  LOADING_CURRENT_CITY_WEATHER,
  SUCCESS_CURRENT_CITY_WEATHER,
  SUCCESS_SAVE_CITY_WEATHER
} from '../types/weather.types.js'

const initialState = {
  initialId: '',
  isLoadingInitial: true,
  fullData: {},
  isLoading: true,
  cityArr: []
}

export function weather(state = initialState, action) {
  switch (action.type) {
    case LOADING_LOCATION_WEATHER:
      return {
        ...state,
        isLoadingInitial: true
      }
    case INITIALIZE_LOCATION_WEATHER:
      return {
        ...state,
        initialId: action.id,
        isLoadingInitial: false
      }
    case LOADING_CURRENT_CITY_WEATHER:
      return {
        ...state,
        isLoading: true
      }
    case SUCCESS_CURRENT_CITY_WEATHER:
      return {
        ...state,
        fullData: { ...action.data },
        isLoading: false
      }
    case SUCCESS_SAVE_CITY_WEATHER:
      return {
        ...state,
        cityArr: [ ...action.city ]
      }
    default:
      return state
  }
}