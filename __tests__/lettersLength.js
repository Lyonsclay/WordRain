import { Text } from 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

var ReactDOM = require('ReactDOM')
var ReactDOMComponentTree = require('ReactDOMComponentTree')

it('calculates width of text', () => {
  const tree = renderer.create(
    <Index />
  );
});
