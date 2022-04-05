import React from 'react';
import './Posts.css'
//import Signin from "../../pages/Signin"
//import Signup from "./pages/Signup"
import useToken from '../Token/useToken';




// ---------------- requete API --------------------------------
 function allPosts(token) {

    //const { token, getToken } = useToken();  // authentification
    
    //const leToken = sessionStorage.getItem('token');

    fetch('http://localhost:3000/api/posts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
       'Authorization' : 'Bearer '+ token
        
      },
      body: JSON.stringify()
    })
    .then(data => data.json())
}

export default function Posts () {
//const Posts = () => {

    const {token} = useToken();
    //console.log(useToken());
    // recuperation des posts
    const lesPosts = allPosts(token);
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

//export default function Posts;