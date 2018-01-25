import React from 'react'
import { Image } from 'react-native'
import { PropTypes } from 'prop-types'

/**
 * @class HeartShape
 */

const HeartShape = ({ color }) => {
	return <Image source={require('./icon.png')} style={{ tintColor: color }} />
}

HeartShape.propTypes = {
	color: PropTypes.string
}

HeartShape.defaultProps = {
	color: 'red'
}

/**
 * Exports
 */

export default HeartShape
