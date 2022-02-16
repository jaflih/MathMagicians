import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CalculatorContainer from './pages/CalculatorContainer';
import Quote from './pages/Quote';
import Home from './pages/Home';
import NotMatch from './pages/NotMatch';
import Header from './components/Header';

import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/calculator" element={<CalculatorContainer />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="*" element={<NotMatch />} />
          </Routes>
        </Router>
      </>
    );
  }
}
