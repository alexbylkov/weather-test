import React from 'react'
import { Link } from 'react-router-dom'
import './saved-cities.sass'

export const SavedCities = ({ cityArr }) => {

  const emptyArr = Array(10)
  const totalArr = [...cityArr, ...emptyArr].filter((_, i) => i < 10)

  return (
    <div className="saved-sities">
      <h1>Saved cities</h1>
      <div className="saved-sities__wrapper">
        {totalArr.map((item, i) => item ?
          <Link 
            to={`/${item}`} 
            key={i}
            className="saved-sities__item"
          >
            {item.split('-')[0]}
          </Link> : <div key={i} className="saved-sities__item"></div>
        )}
      </div>
    </div>
  )
}