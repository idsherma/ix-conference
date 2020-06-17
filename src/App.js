import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from "react-router-dom";
import './App.css';
import Home from './components/pages/Home';

function App() {
  return <Route path="/" component={Home}/>;
}

export default App;
