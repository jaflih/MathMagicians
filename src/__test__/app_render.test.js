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

});
