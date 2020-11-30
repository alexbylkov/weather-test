import { useEffect } from 'react'
import { connect } from 'react-redux'

import { getInitialLocation } from '../../redux/actions/weather.actions'

const InitializeLocation = ({children, getInitialLocation, isLoading}) => {

  useEffect(() => getInitialLocation(), [getInitialLocation])

  return children(isLoading)
}

const mapStateToProps = state => ({
  isLoading: state.weather.isLoadingInitial,
})

const InitializeLocationConnect = connect( mapStateToProps, { getInitialLocation })(InitializeLocation)

export { InitializeLocationConnect as InitializeLocation }