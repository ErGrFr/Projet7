
const express = require('express');
const cors = require('cors');
const router = express.Router();

const commentsCtrl = require('../controllers/comments');

const auth = require('../middlewares/auth');             // verif du token


//console.log("routes posts");
router.get('/:id', auth, commentsCtrl.getComments);               // recupere tous les Comments d'un Post

//router.post('/:id', auth, commentsCtrl.createComment);       // creation d'un comment
router.post('/:id', commentsCtrl.createComment);       // creation d'un comment

//router.put('/:id', auth, multer, commentsCtrl.modifyComment);     // modification d'un comment
//router.put('/:id', auth, commentsCtrl.modifyComment);     // modification d'un comment
router.put('/:id', commentsCtrl.modifyComment);     // modification d'un comment

router.delete('/:id', auth, commentsCtrl.deleteComment);          // suppression d'un comment

//router.post('/:id/like', auth, postsCtrl.like);             // J'aime ou j'aime pas


module.exports = router;