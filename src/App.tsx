import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './components/navbar';
import { Hero } from './components/hero';

function App() {
  return (
    <div className="App">
      <NavBar />
      < Hero />
    </div>
  );
}

export default App;
