import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export const isEmptyObj = obj => {
  if (Object.keys(obj).length === 0) {
    return true
  }
  return false
}

export const strFormatter = str => {
  const i = str.indexOf('-')
  return str.slice(i + 1)
}

export const strDeleteSpace = str => str.split(' ').join('').split('-').join('')

export const dateFormatterLong = dt => {
  const date = new Date(dt * 1000)

  const formatter = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric"
  })

  return formatter.format(date)
}

export const dateFormatterShort = dt => {
  const date = new Date(dt * 1000)

  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric"
  })

  return formatter.format(date)
}

export const getArrayToday = hourly => {
  return hourly.filter((item, i) => new Date(item.dt * 1000).getDate() === new Date().getDate())
}

export const getArrayTomorrow = hourly => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1); 
  return hourly.filter((item, i) => new Date(item.dt * 1000).getDate() === tomorrow.getDate())
}

export const getTime = dt => {
  const date = new Date(dt * 1000)

  let formatter = new Intl.DateTimeFormat("ru", {
    hour: "numeric", 
    minute: "numeric"
  })

  return formatter.format(date)
}

export const getWeatherStrStrong = weather => `${weather.weather[0].main}, Wind - ${weather.wind_speed} meter per second`
export const getWeatherStr = weather => `${weather.weather[0].main}, Wind - ${weather.wind_speed} m/s`

export const getTemp = temp => `${Math.round(temp)} °C`