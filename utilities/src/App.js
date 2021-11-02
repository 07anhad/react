import logo from './logo.svg';
import './App.css';
let name = "Anhad"

function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact Us</li>
    </nav>

    <h1>Hello {name}</h1>

    <div className="container">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde perferendis voluptates tempore aliquam omnis alias optio adipisci odio. Quidem vero repudiandae, maxime est adipisci aliquid voluptate provident. Mollitia quae ad alias perspiciatis rem!
      </p>
    </div>
    </>
  );
}

export default App;
