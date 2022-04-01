import React from "react";
//import logo from '../logo.svg';
import '../App.css';
import Posts from "../components/Posts/Posts";
//import Banner from '../components/Banner';
//import Posts from "../components/Posts";
//import Signin from "../components/Signin";


const App = () => {
    return(
    <div className="App">
      
      
        <p>
            Home
        </p>
        
        <Posts />

      
    </div>
        

    );
};

export default App;