import React from 'react';

import MadeWithLoveDefault from '../index.js';

import { MadeWithLove } from '../index.js';

import renderer from 'react-test-renderer';


test('exports', () => {

    expect( MadeWithLove ).toEqual( MadeWithLoveDefault );
});

test('normal operation without any changes', () => {

  const tree = renderer.create(<MadeWithLove/>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('normal operation, place changed', () => {

  const tree = renderer.create(<MadeWithLove place={'New York'}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
