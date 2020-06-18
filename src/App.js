import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import './App.css';
import Home from './components/pages/Home';
import Navbar from './components/layouts/Navbar';
import SpeakersList from './components/pages/SpeakersList';
import SpeakerInfo from "./components/pages/SpeakerInfo";
import Footer from './components/layouts/Footer'; 


function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/speakers-list" component={SpeakersList}/> 
        <Route path="/speakers/info/:id" children={<SpeakerInfo />} />
      </Switch>
      <Footer/>
    </React.Fragment>

  );
}

export default App;
