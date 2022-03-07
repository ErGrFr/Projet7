
const express = require('express');
const cors = require('cors');
const router = express.Router();

const postsCtrl = require('../controllers/posts');

const auth = require('../middlewares/auth');             // verif du token
const multer = require('../middlewares/multer-cfg');     // fichier image

//console.log("routes posts");
router.get('/', auth, postsCtrl.getAllPosts);               // recupere tous les Posts

//router.post('/', auth, multer, postsCtrl.createPost);       // creation d'un post
router.post('/', postsCtrl.createPost);       // creation d'un post

//router.put('/:id', auth, multer, postsCtrl.modifyPost);     // modification d'un post

router.delete('/:id', auth, postsCtrl.deletePost);          // suppression d'un post
//router.delete('/:id', postsCtrl.deletePost);          // suppression d'un post

//router.post('/:id/like', auth, postsCtrl.like);             // J'aime ou j'aime pas


module.exports = router;