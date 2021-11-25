import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/about/About';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/contact"><Contact /></Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App;
