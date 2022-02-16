import React from 'react';
import renderer from 'react-test-renderer';
import CalculatorContainer from '../pages/CalculatorContainer';
import Home from '../pages/Home';
import App from '../App';

it('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer.create(<CalculatorContainer />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
