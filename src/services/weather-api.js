import axios from 'axios'

const key = process.env.REACT_APP_WEATHER_KEY

export const getWeatherData = async coords => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lng}&appid=${key}&units=metric&exclude=alerts`
  )
  const { current, hourly, daily } = res.data
  return { current, hourly, daily }
}