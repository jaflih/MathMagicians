import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import App from '../App';
import Calculator from '../components/Calculator';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);

    screen.getByText('Math');
    expect(screen.getByText('Math')).toBeInTheDocument();
    expect(screen.queryByText('William Paul Thurston')).toBeNull();
    expect(screen.queryByText("Let's do some math!")).toBeNull();
  });

  test('Navigate in the App ', () => {
    render(<App />);

    screen.getByText('Math');
    expect(screen.getByText('Math')).toBeInTheDocument();
    expect(screen.queryByText('William Paul Thurston')).toBeNull();
    expect(screen.queryByText("Let's do some math!")).toBeNull();

    userEvent.click(screen.getByText('Calculator'));

    expect(screen.getByText('Math')).toBeInTheDocument();
    expect(screen.queryByText('William Paul Thurston')).toBeNull();
    expect(screen.queryByText("Let's do some math!")).toBeInTheDocument();

    userEvent.click(screen.getByText('Quote'));

    expect(screen.getByText('Math')).toBeInTheDocument();
    expect(screen.queryByText('William Paul Thurston')).toBeInTheDocument();
    expect(screen.queryByText("Let's do some math!")).toBeNull();
  });

  test('Use the calculator Addition', () => {
    render(<Calculator />);
    userEvent.click(screen.queryByText('9'));
    userEvent.click(screen.queryByText('+'));
    userEvent.click(screen.queryByText('2'));
    userEvent.click(screen.queryByText('='));
    expect(screen.getByText('11')).toBeInTheDocument();
  });

  test('Use the calculator with Subtraction ', () => {
    render(<Calculator />);
    userEvent.click(screen.queryByText('1'));
    userEvent.click(screen.queryByText('-'));
    userEvent.click(screen.queryByText('2'));
    userEvent.click(screen.queryByText('='));
    expect(screen.getByText('-1')).toBeInTheDocument();
  });

  test('Use the calculator with Multiplication ', () => {
    render(<Calculator />);
    userEvent.click(screen.queryByText('4'));
    userEvent.click(screen.queryByText('x'));
    userEvent.click(screen.queryByText('3'));
    userEvent.click(screen.queryByText('='));
    expect(screen.getByText('12')).toBeInTheDocument();
  });

  test('Use the calculator with Division ', () => {
    render(<Calculator />);
    userEvent.click(screen.queryByText('6'));
    userEvent.click(screen.queryByText('+/-'));
    userEvent.click(screen.queryByText('÷'));
    userEvent.click(screen.queryByText('2'));
    userEvent.click(screen.queryByText('='));
    expect(screen.getByText('-3')).toBeInTheDocument();
  });

  test('Use the calculator with Modulus ', () => {
    render(<Calculator />);
    userEvent.click(screen.queryByText('8'));
    userEvent.click(screen.queryByText('%'));
    userEvent.click(screen.queryByText('3'));
    userEvent.click(screen.queryByText('='));
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
