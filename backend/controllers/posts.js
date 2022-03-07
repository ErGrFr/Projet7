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
    console.log("Posts getAllPosts");
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

  console.log("creatPost controller");
  console.log(req.body);
  // On stock les datas du frontend
  //const monPost = JSON.parse(req.body); 
  //console.log(monPost);
  
  // création de l'objet Post ( model post)
  const newPost = new Post({
    ...req.body,   // recuperation des datas  ( frontend )
    //imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`, // http://localhost:3000/images/nom.jpg
    //userId: res.locals.userId,
    //likes: 0,     // init a zero, car nouveau post
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
    console.log(req.params)
    Post.findOne({_id: req.params.id})
      .then( post => {
        //const filename = post.imageUrl.split('/images/')[1];
        //fs.unlink(`images/${filename}`, () => {       // suppression du fichier local et du post
          console.log(req.params.id);
          Post.destroy({where : {id: req.params.id}})   // suppression de l'enregistrement passé en parametre
          .then( () => {
              res.status(200).json({message: 'Post Deleted!'});
            })
          .catch( (error) => {
              res.status(400).json({error: error});
            }
          );
  
        //});
      })
      .catch(error => res.status(400).json({error}))
    
  };

  //--------------------------------------------------------------------------------
//-------------------------- modification d'une sauce ----------------------------
//--------------------------------------------------------------------------------
exports.modifyPost = (req, res, next) => {

  console.log("modify Post");
  if (req.file){  // si req.file existe ( modification de l'image)
    
      Post.findOne({_id: req.params.id})  // recherche le POST a modifier pour supprimer l'ancienne image
      .then( post => {
      
        const filename = post.imageUrl.split('/images/')[1]; // recuperation du nom de l'image
  
        fs.unlinkSync(`images/${filename}`);//, (err) => {  // suppression du fichier local ( SYNC )
    
          const monPost = {
            ...JSON.parse(req.body.post),
            imageUrl:  `${req.protocol}://${req.get('host')}/images/${req.file.filename}`, // MAJ nouvelle image
          }
          // sauvegarde dans la BDD
          Post.update({...req.body},{where : {id: req.params.id}})
            .then( () => res.status(201).json({message: 'Post updated successfully!'}))
            .catch((error) => res.status(400).json({error: error}));
        //});     
      })
      .catch(error => res.status(400).json({error}))

  } else { // si req.file n'existe pas , on passe a la maj simple
    // sauvegarde dans la BDD
    //const monPost = {...req.body};
    //console.log("else");
    Post.update({...req.body},{where : {id: req.params.id}})
    .then( () => res.status(201).json({message: 'Post updated successfully!'}))
    .catch((error) => res.status(400).json({error: error}));
  };  
  
};