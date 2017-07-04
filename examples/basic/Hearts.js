import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import FloatingHearts from 'react-native-floating-hearts'

class App extends Component {
  state = {
    count: 0,
  }

  render() {
    const { count } = this.state

    return (
      <TouchableOpacity activeOpacity={1} style={styles.container} onPress={() => this.setState({ count: count + 1 })}>
        <FloatingHearts count={count} />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 300,
  },
})

export default App
