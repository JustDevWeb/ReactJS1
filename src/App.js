import './App.scss';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        My first React App
        <h3>Hello, {props.name}</h3>
      </header>
    </div>
  );
}

export default App;
