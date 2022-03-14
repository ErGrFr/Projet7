//import logo from './logo.svg';
import './App.css';
import Banner from './components/banner';
import Maliste from './components/MaListe';

// <img src={logo} className="App-logo" alt="logo" />

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <nav>
          <Banner />
         </nav>
         
         <body>
          <p>
            <Maliste />
          </p>
         </body>

        <footer>

        </footer>

        
      </header>
    </div>
  );
}

export default App;
