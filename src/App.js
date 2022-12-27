import './App.css';
import {FirstSection} from './sections/firstSection/FirstSection.jsx'
import {TileSection} from './sections/tileSection/TileSection.jsx'
import {UserSection} from './sections/userSection/UserSection.jsx'
import {FooterSection} from './sections/footerSection/FooterSection.jsx'
import {HeroSection} from './sections/heroSection/HeroSection.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeroSection/>
        <FirstSection/>
        <UserSection/>
        <TileSection/>
        <FooterSection/>
      </header>
    </div>
  );
}

export default App;
