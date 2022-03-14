import logo from './logo.svg';
import './App.css';
import Banner from './components/banner';
//import Maliste from './components/MaListe';
import Signin from './components/signin';

 <img src={logo} className="App-logo" alt="logo" />

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <div class="container-fluid">
          <Banner />
         </div>
      </header>
      <body class="container">
        
        <Signin/>
      
      </body>

        <footer>

        </footer>

        
      
    </div>
  );
}

export default App;
