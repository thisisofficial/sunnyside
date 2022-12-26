import logo from './logo.svg';
import './App.css';
import {FirstSection} from './sections/firstSection/FirstSection.jsx'
import {TileSection} from './sections/tileSection/TileSection.jsx'
import {UserSection} from './sections/userSection/UserSection.jsx'
import {FooterSection} from './sections/footerSection/FooterSection.jsx'

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
        <FooterSection/>
      </header>
    </div>
  );
}

export default App;
