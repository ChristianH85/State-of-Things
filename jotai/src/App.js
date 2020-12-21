import logo from './logo.svg';
import './App.css';
import {useAtom} from 'jotai'
import { name } from "./Atoms";
import Nom from './components/Nom';
function App() {
  const [nom,changeNom]=useAtom(name)
  console.log(nom)
  const newNom=()=>{
    changeNom('St. Dangerous')
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>{nom}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={newNom}>Make Dangerous</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <Nom/>
    </div>
  );
}

export default App;
