// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';


function App() {
  // const [darkMode, setdarkMode] = useState(false); //Wheather dark mode is enabled or not
  return (
    <>
      <Navbar title="TextUtils" />

      <div className="container my-3">
      <TextForm heading = "Enter the text to analyze"/>
      <About/>

      </div>

    </>
  );
}

export default App;
