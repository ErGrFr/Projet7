import React from 'react';
import './Posts.css'


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

    const lesPosts = allPosts();
    console.log(lesPosts);

    return (
        <div className="post">
            <p>
                Posts
            </p>
        </div>
    );
};

export default Posts;