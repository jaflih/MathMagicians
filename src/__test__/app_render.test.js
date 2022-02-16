import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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
    userEvent.click(screen.queryByText('95'));
    userEvent.click(screen.queryByText('-'));
    userEvent.click(screen.queryByText('2'));
    userEvent.click(screen.queryByText('='));
    expect(screen.getByText('93')).toBeInTheDocument();
  });\

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
    userEvent.click(screen.queryByText('16'));
    userEvent.click(screen.queryByText('÷'));
    userEvent.click(screen.queryByText('4'));
    userEvent.click(screen.queryByText('='));
    expect(screen.getByText('4')).toBeInTheDocument();
  });

  test('Use the calculator with Modulus ', () => {
    render(<Calculator />);
    userEvent.click(screen.queryByText('13'));
    userEvent.click(screen.queryByText('%'));
    userEvent.click(screen.queryByText('3'));
    userEvent.click(screen.queryByText('='));
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
