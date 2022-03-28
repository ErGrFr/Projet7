import React, { useState } from 'react';
import PropTypes from 'prop-types';
//import Signin from '../components/signin';
import '../styles/signin.css'



async function loginUser(credentials) {
  return fetch('http://localhost:3000/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }



export default function Signin ({setToken}) {

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
    // fonction login  : requete react  ( fetch)
    const handleSubmit = async e => {
      e.preventDefault();
      const token = await loginUser({
        username,
        password
      });
      setToken(token);
    }
    return (
        
      <div className="form-signin">
        <form onSubmit={handleSubmit}>
          
          <h1 className="h3 mb-3 fw-normal">S'identifier</h1>
      
          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={e => setUserName(e.target.value)}></input>
            <label htmlFor="floatingInput">Email</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e => setPassword(e.target.value)}></input>
            <label htmlFor="floatingPassword">Mot de passe</label>
          </div>
      
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"></input> se souvenir de moi
            </label>
          </div>
          <button 
          className="w-100 btn btn-lg btn-primary" 
          type="submit"
          //type="button"
           //onClick={Signin}
          >Se connecter</button>
          
        </form>
    </div>

    
    );



};

Signin.propTypes = {
  setToken: PropTypes.func.isRequired
}

//export default Signin;