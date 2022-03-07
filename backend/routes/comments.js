
const express = require('express');
const cors = require('cors');
const router = express.Router();

const commentsCtrl = require('../controllers/comments');

const auth = require('../middlewares/auth');             // verif du token


//console.log("routes posts");
router.get('/', auth, commentsCtrl.getComments);               // recupere tous les Posts

router.post('/', auth, commentsCtrl.createComment);       // creation d'un post

//router.put('/:id', auth, multer, postsCtrl.modifyPost);     // modification d'un post
//router.put('/:id', auth, postsCtrl.modifyPost);     // modification d'un post
router.put('/:id', commentsCtrl.modifyComment);     // modification d'un post

router.delete('/:id', auth, commentsCtrl.deleteComment);          // suppression d'un post

//router.post('/:id/like', auth, postsCtrl.like);             // J'aime ou j'aime pas


module.exports = router;