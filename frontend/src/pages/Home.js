import React from "react";
import logo from '../logo.svg';
import '../App.css';
import Banner from '../components/Banner';
import Signin from '../components/Signin';
<img src={logo} className="App-logo" alt="logo" />

const App = () => {
    return(
    <div className="App">
      <header className="App-header">
         <div className="container-fluid">
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
};

export default App;