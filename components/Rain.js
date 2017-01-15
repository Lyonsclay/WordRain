import React, { Component } from 'react'
import { Surface, Text, Group, Path } from 'ReactNativeART'
import { View, Animated, StyleSheet } from 'react-native'
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
      initialY={20}
      finalY={400}
    />
  )
)

const Rain = () => (
  <Surface width={36} height={600} style={styles.surface}>
    {raining} 
  </Surface>
)
const styles = StyleSheet.create({
  surface: {
    flex: -1,
flexDirection: 'row',
    justifyContent: 'space-between',
  }
})
export default Rain
