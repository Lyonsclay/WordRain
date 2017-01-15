import React, { Component } from 'react'
import { Surface, Group, Path } from 'ReactNativeART'
import { View, Text, Animated, StyleSheet } from 'react-native'
import Letter from './Letter'

const letters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
].reduce((acc, l, i) => {
  acc[l] = -36 + Math.random() * -550
  return acc
}, {})

const keys = Object.keys(letters)
const raining = keys.map((l, i) =>
  (
    <Letter
      key={i}
      letter={l}
      initialY={letters[l]}
      finalY={300}
    />
  )
)

const Rain = () => (
  <View style={styles.view}>
  {raining}
  </View>
)
const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  }
})
export default Rain
