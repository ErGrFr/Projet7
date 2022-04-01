import React from 'react';
import './Posts.css'
import Signin from "../../pages/Signin"
//import Signup from "./pages/Signup"
import useToken from '../Token/useToken';

// ---------------- requete API --------------------------------
async function allPosts() {
    return fetch('http://localhost:3000/api/posts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify()
    })
      .then(data => data.json())
   }

const Posts = () => {

const { token, setToken } = useToken();  // authentification

  // test si token est present, si pas present affichage page signin
  if(!token) {
    return <Signin setToken={setToken} />
  }

    // recuperation des posts
    const lesPosts = allPosts();
    console.log(lesPosts);

    // on affiche tous les posts
    for (const unPost of allPosts ){

        return (
            <div className="post">
                <p>
                    {unPost.title}
                </p>
            </div>
        );



    }

    
};

export default Posts;