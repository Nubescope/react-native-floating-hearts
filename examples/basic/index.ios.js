/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import Hearts from './Hearts'

export default class TestHearts extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Hearts />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

AppRegistry.registerComponent('TestHearts', () => TestHearts)
