import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Project from './components/pages/Project';
import Process from './components/pages/Process';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/projects' component={Project} />
          <Route path='/process' component={Process} />
        </Switch>
      </Router>
    </>
  );
  }

export default App;
