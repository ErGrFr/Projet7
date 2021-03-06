//-----------------------------------------------------------------------------------
//------------------------------ gestion des COMMENTS ---------------------------------
//-----------------------------------------------------------------------------------

const db = require('../models');
const Comment = db.comment;

//const fs = require('fs');  // file system, pour supprimer l'image local


//-----------------------------------------------------------------------
//--------------------- recupere tous les Comments d'un Post ----------------------
//-----------------------------------------------------------------------
exports.getComments = (req, res, next) => {
    
    Comment.findAll({where : {postId: req.params.id}})    // recherche comments par no de post
    .then(
      (comments) => {
        res.status(200).json(comments);
      }
    ).catch(
      (error) => {
        res.status(400).json({error: error});
      }
    );
  };
  

//-----------------------------------------------------------------------------------
//---------------------------- création d'un Comment ---------------------------------
//-----------------------------------------------------------------------------------
exports.createComment = async function (req, res, next) {

  
  
  // création de l'objet Post ( model post)
  const newComment = new Comment({
    ...req.body,   // recuperation des datas  ( frontend )
    //imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`, // http://localhost:3000/images/nom.jpg
    //userId: res.locals.userId,
    //likes: 0,     // init a zero, car nouveau post
    //dislikes: 0,
    //usersLiked: [],
    //usersDisliked: []
  });
  
  const saveComment = await newComment.save()
  .then( () => {
      res.status(201).json({
        message: 'Comment saved successfully!'
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
//---------------------------- supression d'un Comment ------------------------------
//----------------------------------------------------------------------------------
exports.deleteComment = (req, res, next) => {
    // suppression du fichier image local
    
    Comment.findOne({_id: req.params.id})
      .then( post => {
        //const filename = post.imageUrl.split('/images/')[1];
        //fs.unlink(`images/${filename}`, () => {       // suppression du fichier local et du comment
          
          Comment.destroy({where : {id: req.params.id}})   // suppression de l'enregistrement passé en parametre
          .then( () => {
              res.status(200).json({message: 'Comment Deleted!'});
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
//-------------------------- modification d'un comment ----------------------------
//--------------------------------------------------------------------------------
exports.modifyComment = (req, res, next) => {

  console.log("modify Comment");
  if (req.file){  // si req.file existe ( modification de l'image)
    
      Comment.findOne({_id: req.params.id})  // recherche le POST a modifier pour supprimer l'ancienne image
      .then( comment => {
      
        const filename = comment.imageUrl.split('/images/')[1]; // recuperation du nom de l'image
  
        fs.unlinkSync(`images/${filename}`);//, (err) => {  // suppression du fichier local ( SYNC )
    
          const monComment = {
            ...JSON.parse(req.body.comment),
            imageUrl:  `${req.protocol}://${req.get('host')}/images/${req.file.filename}`, // MAJ nouvelle image
          }
          // sauvegarde dans la BDD
          Comment.update({...req.body},{where : {id: req.params.id}})
            .then( () => res.status(201).json({message: 'Comment updated successfully!'}))
            .catch((error) => res.status(400).json({error: error}));
            
      })
      .catch(error => res.status(400).json({error}))

  } else { // si req.file n'existe pas , on passe a la maj simple
    // sauvegarde dans la BDD
    
    Comment.update({...req.body},{where : {id: req.params.id}})
    .then( () => res.status(201).json({message: 'Comment updated successfully!'}))
    .catch((error) => res.status(400).json({error: error}));
  };  
  
};