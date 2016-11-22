import React, { PropTypes } from 'react'
import { Image } from 'react-native'

/**
 * @class HeartShape
 */

const HeartShape = props => {
  return <Image source={require('./heart.png')} tintColor={props.color} />
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

