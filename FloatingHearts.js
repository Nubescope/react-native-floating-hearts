import React, { Component, PropTypes } from 'react'
import { View, Animated, StyleSheet } from 'react-native'

import HeartShape from './HeartShape'

/**
 * Heart Index
 */

let heartIndex = 1

/**
 * @class FloatingHearts
 */

class FloatingHearts extends Component {

  state = {
    hearts: [],
    height: null,
  }

  addHeart() {
    this.state.hearts.push({
      id: heartIndex++,
      right: getRandomNumber(50, 150)
    })
    this.setState(this.state)
  }

  removeHeart(id) {
    let index = this.state.hearts.findIndex(heart => heart.id === id)
    this.state.hearts.splice(index, 1)
    this.setState(this.state)
  }

  componentWillUpdate(nextProps) {
    if (nextProps.heartCount !== this.props.heartCount) {
      this.addHeart()
    }
  }

  handleOnLayout = e => {
    const height = e.nativeEvent.layout.height

    this.setState({ height })
  }

  render() {
    const { height } = this.state
    const { heartColor, renderCustomShape } = this.props
    const isReady = height !== null

    let heartProps = {}

    if (heartColor !== null) {
      heartProps.color = heartColor
    }

    const shape = renderCustomShape ? 
      renderCustomShape() : 
      <HeartShape {...heartProps} />

    return (
      <View style={[styles.container, this.props.style]} onLayout={this.handleOnLayout}>
        {isReady && this.state.hearts.map(item => (
          <AnimatedShape
            key={item.id}
            height={height}
            style={{ right: item.right }}
            onComplete={this.removeHeart.bind(this, item.id)}
          >
            {shape}
          </AnimatedShape>
        ))}
      </View>
    )
  }
}

FloatingHearts.propTypes = {
  style: View.propTypes.style,
  heartCount: PropTypes.number,
  heartColor: PropTypes.string,
  renderCustomShape: PropTypes.func,
}

FloatingHearts.defaultProps = {
  heartCount: -1,
}

/**
 * @class AnimatedShape
 */

class AnimatedShape extends Component {
  constructor(props) {
    super(props)

    this.state = {
      position: new Animated.Value(0),
      shapeHeight: null,
      enabled: false,
      animationsReady: false,
    }
  }

  componentDidMount() {
    Animated.timing(this.state.position, {
      duration: 2000,
      useNativeDriver: true,
      toValue: this.props.height * -1,
    }).start(this.props.onComplete)
  }

  getAnimationStyle() {
    if (!this.state.animationsReady) {
      return { opacity: 0 }
    }

    return {
      transform: [
        { translateY: this.state.position },
        { translateX: this.xAnimation },
        { scale: this.scaleAnimation },
        { rotate: this.rotateAnimation },
      ],
      opacity: this.opacityAnimation,
    }
  }

  handleOnLayout = e => {
    if (this.rendered) {
      return null
    }

    this.rendered = true

    const height = Math.ceil(this.props.height)
    const negativeHeight = height * -1
    const shapeHeight = e.nativeEvent.layout.height

    this.yAnimation = this.state.position.interpolate({
      inputRange: [negativeHeight, 0],
      outputRange: [height, 0],
    })

    this.opacityAnimation = this.yAnimation.interpolate({
      inputRange: [0, height - shapeHeight],
      outputRange: [1, 0],
    })

    this.scaleAnimation = this.yAnimation.interpolate({
      inputRange: [0, 15, 30, height],
      outputRange: [0, 1.2, 1, 1],
    })

    this.xAnimation = this.yAnimation.interpolate({
      inputRange: [0, height / 2, height],
      outputRange: [0, 15, 0],
    })

    this.rotateAnimation = this.yAnimation.interpolate({
      inputRange: [0, height / 4, height / 3, height / 2, height],
      outputRange: ['0deg', '-2deg', '0deg', '2deg', '0deg'],
    })

    setTimeout(() => this.setState({ animationsReady: true }), 16)
  }

  render() {
    return (
      <Animated.View style={[styles.shapeWrapper, this.getAnimationStyle(), this.props.style]} onLayout={this.handleOnLayout}>
        {this.props.children}
      </Animated.View>
    )
  }
}

AnimatedShape.propTypes = {
  height: PropTypes.number.isRequired,
  onComplete: PropTypes.func.isRequired,
  style: View.propTypes.style,
  children: PropTypes.node.isRequired,
}

AnimatedShape.defaultProps = {
  onComplete: () => {}
}

/**
 * Styles
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  shapeWrapper: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'transparent',
  },
})

/**
 * Helpers
 */

const getRandomNumber = (min, max) => (Math.random() * (max - min) + min)

/**
 * Exports
 */

export default FloatingHearts
