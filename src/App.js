
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  
  return (
    <>
      <Navbar title = 'Pardhu App' />
      <div className="container">
        <TextForm heading = "Enter your text here"/>
      </div>
    </>
  );
}

export default App;
