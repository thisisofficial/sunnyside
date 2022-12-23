import logo from './logo.svg';
import './App.css';
import {FirstSection} from './sections/firstSection/firstSection'
import {TileSection} from './sections/tileSection/tileSection'
import {UserSection} from './sections/userSection/userSection'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <FirstSection/>
        <UserSection/>
        <TileSection/>
      </header>
    </div>
  );
}

export default App;
