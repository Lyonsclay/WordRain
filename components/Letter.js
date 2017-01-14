import React, { Component } from 'react'
import { Surface, Text, Group } from 'ReactNativeART'
import { Animated, StyleSheet } from 'react-native'

const AnimatedGroup = Animated.createAnimatedComponent(Group)

export default class Letter extends Component {
  constructor(props) {
    super(props)

    this.state = { drop: new Animated.ValueXY(props.initialXY) }
  }

  componentDidMount() {
    Animated.spring(
      this.state.drop, {
        tension: 92,
        friction: 72,
        toValue: this.props.finalXY,
      }
    ).start()
  }

  render() {
    const drop = this.state.drop

    return (
      <AnimatedGroup
        x={drop.x}
        y={drop.y}
      >
        <Text font="34px helvetica" fill="gray">
          {this.props.letter}
        </Text>
      </AnimatedGroup>
    )
  }
}
