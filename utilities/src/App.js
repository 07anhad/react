// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'



function App() {
  const [mode, setMode] = useState('dark'); //Wheather dark mode is enabled or not
  return (
    <>
      <Navbar title="TextUtils" mode  ={mode} />

      <div className="container my-3">
      <TextForm heading = "Enter the text to analyze"/>
      <About/>

      </div>

    </>
  );
}

export default App;
