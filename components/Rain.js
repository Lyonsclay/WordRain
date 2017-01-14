import React, { Component } from 'react'
import { Surface, Text, Group, Path } from 'ReactNativeART'
import { Animated, StyleSheet } from 'react-native'
import Letter from './Letter'

const genXY = (i) => (
  {
    x: 36 + i * 30,
    y: -36 + Math.random() * 300
  }
)
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
  acc[l] = genXY(i)
  return acc
}, {})

const keys = Object.keys(letters)
const raining = keys.map((l, i) =>
  (
    <Letter
      key={i}
      letter={l}
      initialXY={letters[l]}
      finalXY={{x: letters[l].x, y: 400}}
    />
  )
)


/* const d = "M130 110 C 120 140, 180 140, 170 110"*/
const d = "M130 110"

const Rain = () => (
  <Surface width={400} height={600}>
    {/* {raining} */}
    <Text path={d} font="28px helvetica" fill="gray">
      Tony was here then he left
    </Text>
  </Surface>
)

export default Rain
