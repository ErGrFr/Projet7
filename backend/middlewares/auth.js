//--------------------------------------------------
//---------- verification du token ------------------
//----------------------------------------------------
require('dotenv').config();    // recuperation des variables d'environnements 
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    console.log("Middlewares auth");
    // recuperation de la chaine du header ( apres mot spread : spread chainecrypté)
    const token = req.headers.authorization.split(' ')[1];    // split sur l'espace apres spread 
    console.log(token);
    console.log(process.env.JWT_SECRET_STRING);
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_STRING); // verification du token
    const userId = decodedToken.userId;
    console.log(userId);
    console.log(decodedToken);
    console.log(req.body.userId);
    if (req.body.userId != userId) {    // userId present et userId different du userId token
      console.log("id not ok");
      throw 'Invalid user ID';
    } else {
      console.log("id ok");
      next();   // ok, on passe a la suite
    }
  } 
  catch (error) {
    console.log(error);
    res.status(401).json({ error })
  };
  
};