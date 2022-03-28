
import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import Banner from './components/Banner';
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"

function App() {
  
  const [token,setToken] = useState();   // test si token est present, si pas present affichage page signin
  if(!token) {
    return <Signin setToken={setToken} />
  }
  return (
    <div>
      <h1>
        App
      </h1>
      <header className="App-header">
         <div className="container-fluid">
          <Banner />
         </div>
      </header>
    

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>

    </div>
    
  );
}

export default App;


