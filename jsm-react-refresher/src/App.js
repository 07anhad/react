import './App.css';
import { useState,useEffect} from 'react';

const App = () => {
  
  const [counter, setcounter] = useState(0);
  
  useEffect(() => {
    alert("You have changed the counter to " + counter);
  },[counter]);

  return (
    <div className="App">
      <br />
      <button onClick={() => setcounter((prevCount) => prevCount - 1)}> - </button>
      <h1>{counter}</h1>
      <button onClick={() => setcounter((prevCount) => prevCount + 1)}> + </button>
    </div>
  );
  
}

export default App;
