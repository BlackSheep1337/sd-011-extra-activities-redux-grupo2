import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './App.css';
import Perfil from './pages/Perfil';
import Error from './pages/Error';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/users/:name" component={ Perfil } />
        <Route path="*" component={ Error } />
      </Switch>
      
    </Router>
  )
}

export default App

