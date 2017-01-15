import React, { Component } from 'react'
/* import { Surface, Text, Group } from 'ReactNativeART'*/
import { View, Text, Animated, StyleSheet } from 'react-native'

const AnimatedView = Animated.createAnimatedComponent(View)
const AnimatedText = Animated.createAnimatedComponent(Text)

export default class Letter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      drop: new Animated.Value(props.initialY),
      fontSize: 44,
    }
  }

  _finish() {
    this.setState({fontSize: 34})
  }

  componentDidMount() {
    Animated.spring(
      this.state.drop, {
        tension: 192,
        friction: 72,
        toValue: this.props.finalY,
      }
    ).start(this._finish.bind(this))
  }

  render() {
    const dropStyle = {
      transform: [{
        translateY: this.state.drop
      }],
    }
    const fontSize = this.state.drop.interpolate({
      inputRange: [this.props.initialY, this.props.finalY],
      outputRange: [56, 32]
    })
    /* const fontSize = this.state.fontSize*/
    return (
      <AnimatedView
        style={dropStyle}
      >
        <AnimatedText style={[styles.text, { fontSize }]}>
          {this.props.letter}
        </AnimatedText>
      </AnimatedView>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'gray',
  }
})
