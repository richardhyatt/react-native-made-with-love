import React from 'react';

import MadeWithLove from '../MadeWithLove.js';

import renderer from 'react-test-renderer';

test('normal operation without any changes', () => {

  const tree = renderer.create(<MadeWithLove/>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('normal operation, place changed', () => {

  const tree = renderer.create(<MadeWithLove place={'New York'}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
