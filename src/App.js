import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quote from './pages/Quote';
import Home from './pages/Home';
import NotMatch from './pages/NotMatch';

import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="*" element={<NotMatch />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
