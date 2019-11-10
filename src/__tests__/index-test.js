import React from 'react';

import MadeWithLove from '../Index';

import renderer from 'react-test-renderer';

test('renders correctly', () => {

  const tree = renderer.create(<MadeWithLove/>).toJSON();
  expect(tree).toMatchSnapshot();
});
