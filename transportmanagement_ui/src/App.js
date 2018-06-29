import React, { Component } from 'react';
import Layout from './Components/Layout/layout';
import {BrowserRouter} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
    <Layout />
    </BrowserRouter>
    );
  }
}

export default App;
