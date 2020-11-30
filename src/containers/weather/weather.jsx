import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getFullDataById, saveCity, initCityList } from '../../redux/actions/weather.actions'

import { strFormatter } from '../../helpers'
import { Layout } from '../../components/layout'
import { WeatherTabs } from '../../components/weather-tabs'
import { Loader } from '../../components/UI/loader'
import { SavedCities } from '../../components/saved-cities'


const Weather = ({ getFullDataById, initialCityId, data, isLoading, saveCity, cityArr, initCityList }) => {

  const [ tab, setTab ] = useState('today')
  const { city } = useParams()

  useEffect(() => {
    initCityList()
    if (city?.length) {
      const cityId = strFormatter(city)
      getFullDataById(cityId)      
    } else {
      getFullDataById(initialCityId) 
    }
  }, [getFullDataById, city, initialCityId, initCityList])

  const { weather, cityName, location } = data

  const saveCityHandler = city => {
    if (city?.length) {
      saveCity(city)
    }
  }

  return isLoading ? <Loader/> : (
    <Layout 
      setTab={setTab} 
      weatherCurrent={weather.current}
      cityName={cityName}
      saveCity={() => saveCityHandler(city)}
    >
      { 
        !city?.length && tab === 'today' ? 
        <SavedCities cityArr={cityArr} /> :
        <WeatherTabs
          tab={tab}
          weather={weather}
          location={location}
          weatherCurrent={weather.current}
        />
      }
    </Layout>
  )
}

const mapStateToProps = state => ({
  initialCityId: state.weather.initialId,
  isLoading: state.weather.isLoading,
  data: state.weather.fullData,
  cityArr: state.weather.cityArr
})

const WeatherContainer = connect( mapStateToProps, { getFullDataById, saveCity, initCityList } )(Weather)

export { WeatherContainer }