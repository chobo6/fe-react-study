import logo from './logo.svg';
import './App.css';
import Basic01 from './components/Basic01';
import State01 from './components/State01';
import State02 from './components/State02';
import Export01 from './components/Export01';
import Quiz01 from './quiz/quiz01/Quiz01';
import State03 from './components/State03';
import Props01 from './components/Props01';
import Props02 from './components/Props02';
import Quiz02 from './quiz/quiz02/Quiz02';

function App() {
  // return <Basic01 />
  // return <State01 />;
  // return <State02 />;
  // return <Export01 />;
  // return <Quiz01 />;
  // return <State03 />;
  // return <Props01 />;
  // return <Props02 />;
  return <Quiz02 />;


  /* return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          hi hello test text 확인~~
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  ); */
}

export default App;
