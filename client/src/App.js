import React from 'react';
import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';
import Feedback from './components/Feedback/Feedback';
import About from './components/About/About';
import Consultation from './components/Consultation/Consultation';
import './App.css';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <main>
        <div className="container">
          <Route path="/posts" render={ () => <Posts/> } />
          <Route path="/feedback" render={ () => <Feedback/> } />
          <Route path="/about" render={ () => <About/> } />
          <Route path="/consultation" render={ () => <Consultation/> } />
        </div>
      </main>
    </div>
  );
}

export default App;