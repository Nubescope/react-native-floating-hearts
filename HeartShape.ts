import React from 'react'
import PropTypes from 'prop-types'
import { Image, ImageSourcePropType } from 'react-native'

/**
 * @class HeartShape
 */

const HeartShape = ({ color, imageSource }) => {
  return <Image source={ imageSource ||require('./heart.png')} style={{ tintColor: color }} />
}

HeartShape.propTypes = {
  color: PropTypes.string,
  imageSource: ImageSourcePropType
}

HeartShape.defaultProps = {
  color: 'red',
}

/**
 * Exports
 */

export default HeartShape
