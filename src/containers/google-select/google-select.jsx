import React, { useState } from "react"
import { useHistory } from 'react-router-dom'

import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete'
import { strDeleteSpace } from '../../helpers'

import './google-select.sass'

export const GoogleSelect = () => {

  const history = useHistory()
  const [ address, setAddress ] = useState('')

  const handleSelect = async address => {
    const res = await geocodeByAddress(address)
    const cityName = strDeleteSpace(res[0].address_components[0].short_name)
    setAddress('')
    history.push(`${cityName}-${res[0].place_id}`)
  }

  return (
    <div className="google-select">
      <PlacesAutocomplete
        value={address}
        onChange={e => setAddress(e)}
        onSelect={handleSelect}
        searchOptions={{types: ["(cities)"]}}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'google-select__input',
              })}
            />
            <div className="google-select__dropdown">
              {loading && <div className={'google-select__item'}>Loading...</div>}
              {suggestions.map((suggestion, i) => {
                const className =  suggestion.active ? 'google-select__item--active' : 'google-select__item'
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, { className })}
                    key={i}
                  >
                    <span>{ suggestion.description }</span>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  )
}