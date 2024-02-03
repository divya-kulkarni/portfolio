import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './components/navbar';
import { Hero } from './components/hero';
import { Skills } from './components/skills';
import { Footer } from './components/footer';
import { Projects } from './components/projects';


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='app-container'>
        <Hero />
        <Skills />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
