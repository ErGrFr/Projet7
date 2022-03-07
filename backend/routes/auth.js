const express = require('express');
const router = express.Router();

const authCtrl = require('../controllers/auth');
const checkpassword = require('../middlewares/checkpassword');

//console.log('routes Auth');
router.post('/login', authCtrl.login);
router.post('/signup', checkpassword, authCtrl.signup);

//router.get('/', function (req, res) {res.send('GET request to auth route');}); // test route


module.exports = router;