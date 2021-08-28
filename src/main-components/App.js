import React from 'react';
import './App.css';
import Main from './Main';
import Header from '../header-components/Header';
import Footer from '../footer-components/Footer';
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
  );
}

export default App;
