//-----------------------------------------------------------------------------------
//------------------------------ gestion des POSTS ---------------------------------
//-----------------------------------------------------------------------------------

const db = require('../models');
const Post = db.post;

const fs = require('fs');  // file system, pour supprimer l'image local


//-----------------------------------------------------------------------
//--------------------- recupere tous les Posts ----------------------
//-----------------------------------------------------------------------
exports.getAllPosts = (req, res, next) => {
    Post.findAll().then(
      (posts) => {
        res.status(200).json(posts);
      }
    ).catch(
      (error) => {
        res.status(400).json({error: error});
      }
    );
  };
  

//-----------------------------------------------------------------------------------
//---------------------------- création d'un Post ---------------------------------
//-----------------------------------------------------------------------------------
exports.createPost = async function (req, res, next) {

  // On stock les datas du frontend
  const monPost = JSON.parse(req.body.post);
  
  // création de l'objet Post ( model post)
  const newPost = new Post({
    ...monPost,   // recuperation des datas de maSauce ( frontend )
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`, // http://localhost:3000/images/nom.jpg
    userId: res.locals.userId,
    //likes: 0,     // init a zero, car nouvelle sauce
    //dislikes: 0,
    //usersLiked: [],
    //usersDisliked: []
  });
  
  const savePost = await newPost.save()
  .then( () => {
      res.status(201).json({
        message: 'Post saved successfully!'
      });
    }
  ).catch( (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};


//-----------------------------------------------------------------------------------
//---------------------------- supression d'un Post ------------------------------
//----------------------------------------------------------------------------------
exports.deletePost = (req, res, next) => {
    // suppression du fichier image local
    Post.findOne({_id: req.params.id})
      .then( post => {
        const filename = post.imageUrl.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {       // suppression du fichier local et de la sauce
          Post.deleteOne({_id: req.params.id})
          .then( () => {
              res.status(200).json({message: 'Post Deleted!'});
            })
          .catch( (error) => {
              res.status(400).json({error: error});
            }
          );
  
        });
      })
      .catch(error => res.status(400).json({error}))
    
  };