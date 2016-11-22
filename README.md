react-native-floating-hearts
============================
Periscope floating hearts animation for React Native.

![react-native-floating-hearts](http://i.imgur.com/Rz9KfhX.gif)

Installation
------------

```bash
npm install --save react-native-floating-hearts 
```

Quick start
-----------

```jsx
import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import FloatingHearts from 'react-native-floating-hearts'

class App extends Component {
  state = {
    heartCount: 0,
  }

  render() {
    const { heartCount } = this.state

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.container}
        onPress={() => this.setState({ heartCount: heartCount + 1 })}
      >
        <FloatingHearts heartCount={heartCount} />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 300,
  }
})

export default App
```

Using a custom shape
--------------------

```jsx
import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import FloatingHearts from 'react-native-floating-hearts'

class App extends Component {
  state = {
    heartCount: 0,
  }

  render() {
    const { heartCount } = this.state

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.container}
        onPress={() => this.setState({ heartCount: heartCount + 1 })}
      >
        <FloatingHearts 
          heartCount={heartCount} 
          renderCustomShape={() => {
            return <View style={styles.square} />
          }}
        />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 300,
  },
  square: { 
    width: 40, 
    height: 40, 
    backgroundColor: 'red',
  },
})

export default App
```

### Props

| Props name        | Type     | Description                                          | Default |
|-------------------|----------|------------------------------------------------------|---------|
| heartCount*       | Number   | The added heart count                                |         |
| heartColor        | Number   | The added heart count                                | 'red'   |
| renderCustomShape | Function | Renders a custom shape instead of a heart            |         |

(*) required

Acknowledgements
----------------
Based on [this blog post](http://browniefed.com/blog/react-native-periscope-hearts-animation/) by [@browniefed](https://twitter.com/browniefed)
