import React from 'react';
import renderer from 'react-test-renderer';
import CalculatorContainer from '../pages/CalculatorContainer';
import Home from '../pages/Home';
import App from '../App';
import NotMatch from '../pages/NotMatch';
import Quote from '../pages/Quote';
import Calculator from '../components/Calculator';
import Keyboard from '../components/Keyboard';

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

it('renders correctly', () => {
  const tree = renderer.create(<NotMatch />).toJSON();
  expect(tree).toMatchSnapshot();
});
it('renders correctly', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});
it('renders correctly', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
it('renders correctly', () => {
  const tree = renderer.create(<Keyboard />).toJSON();
  expect(tree).toMatchSnapshot();
});
