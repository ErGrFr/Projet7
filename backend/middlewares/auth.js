//--------------------------------------------------
//---------- verification du token ------------------
//----------------------------------------------------
require('dotenv').config();    // recuperation des variables d'environnements 
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    // recuperation de la chaine du header ( apres mot spread : spread chainecrypté)
    const token = req.headers.authorization.split(' ')[1];    // split sur l'espace apres spread   
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_STRING); // verification du token
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {    // userId present et userId different du userId token
      throw 'Invalid user ID';
    } else {
      next();   // ok, on passe a la suite
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
    
  }
};