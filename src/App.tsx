import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './components/navbar';
import { Hero } from './components/hero';
import { Skills } from './components/skills';
import { Footer } from './components/footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='app-container'>
        <Hero />
        <Skills />
      </div>
      <Footer />
    </div>
  );
}

export default App;
