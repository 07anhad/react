import './App.css';

const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.lastName }</h2>
      <h2>Age: { props.age}</h2>
    </>
  )
}

const App = () => {

  return (
    <div className="App">
      <Person
        name='Anhad'
        lastName='Parashar'
        age='19'
      />

      <br />

      <Person 
        name='john' 
        lastName='doe' 
        age={17 + 44}
      />
    </div>
  );
  
}

export default App;
