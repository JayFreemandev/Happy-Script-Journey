import './App.css';
import pingpong from './pingpong.jpg';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <TodoList />
        </div>
      
        <div className="ping-pong">
        <img src={pingpong} className="App-logo" alt="logo"/>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
      </header>
    </div>
  );
}

export default App;
