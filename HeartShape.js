import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'react-native'

/**
 * @class HeartShape
 */

const HeartShape = ({ color }) => {
  return <Image source={require('./heart.png')} style={{ tintColor: color }} />
}

HeartShape.propTypes = {
  color: PropTypes.string,
}

HeartShape.defaultProps = {
  color: 'red',
}

/**
 * Exports
 */

export default HeartShape
