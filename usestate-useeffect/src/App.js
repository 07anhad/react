import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import TestComponent from './TestComponent';

function App() {

  const [showComponent, setShowComponent] = useState(true);



  return <div className="App">
    <button onClick={() => setShowComponent(true)}>show component</button>
    <button onClick={() => setShowComponent(false)}>Hide component</button>
    {showComponent && <TestComponent />}
    
    
  </div>
 
}

export default App;
