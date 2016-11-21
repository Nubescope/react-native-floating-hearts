import React, { PropTypes } from 'react'
import { View, StyleSheet, } from 'react-native'

/**
 * @class HeartShape
 */

const HeartShape = props => {
  const color = props.color
  const colorStyle = { backgroundColor: color }

  return (
    <View {...props} style={[styles.container, props.style, colorStyle]}>
      <View style={[styles.heartShape, styles.leftHeart]} />
      <View style={[styles.heartShape, styles.rightHeart]} />
    </View>
  )
}

HeartShape.propTypes = {
  style: View.propTypes.style,
  color: PropTypes.string,
}

HeartShape.defaultProps = {
  color: '#6427d1',
}

/**
 * Styles
 */

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    backgroundColor: 'transparent'
  },

  heartShape: {
    width: 30,
    height: 45,
    position: 'absolute',
    top: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  leftHeart: {
    transform: [
      {rotate: '-45deg'}
    ],
    left: 5
  },

  rightHeart: {
    transform: [
      {rotate: '45deg'}
    ],
    right: 5
  }
})

/**
 * Exports
 */

export default HeartShape

