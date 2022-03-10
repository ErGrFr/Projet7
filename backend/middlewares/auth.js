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
    
    
    if (!token) {
      return res.status(403).send("A token is required for authentication");
    }
    try {
      //const decoded = jwt.verify(token, config.TOKEN_KEY);
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET_STRING); // verification du token
      //const userId = decodedToken.userId;
      req.user = decodedToken;
  
    } catch (err) {
      return res.status(401).send("Invalid Token");
    }
    return next();
  } 
  catch (error) {
    
    res.status(403).json({ error })
  };
  
};