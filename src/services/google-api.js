import axios from 'axios'

const key = process.env.REACT_APP_GOOGLE_KEY

export const postGeolocation = async (lat, lng) => {
  const res = await axios.post(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${key}&result_type=locality&language=en`
  )
  
  return res.data.results[0].place_id
}

export const getDataByPlaceId = async id => {
  const res = await axios.post(
    `https://maps.googleapis.com/maps/api/geocode/json?place_id=${id}&key=${key}&language=en`
  )

  return res.data.results[0]
}