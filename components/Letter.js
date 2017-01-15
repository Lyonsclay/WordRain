import React, { Component } from 'react'
import { Surface, Text, Group } from 'ReactNativeART'
import { Animated, StyleSheet } from 'react-native'

const AnimatedGroup = Animated.createAnimatedComponent(Group)

export default class Letter extends Component {
  constructor(props) {
    super(props)

    this.state = { drop: new Animated.Value(props.initialY) }
  }

  componentDidMount() {
    Animated.spring(
      this.state.drop, {
        tension: 192,
        friction: 72,
        toValue: this.props.finalY,
      }
    ).start()
  }

  render() {
    const drop = this.state.drop

    return (
      <AnimatedGroup
      width={40}
        y={drop}
      >
        <Text font="34px helvetica" fill="gray">
          {this.props.letter}
        </Text>
      </AnimatedGroup>
    )
  }
}
