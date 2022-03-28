 
const bcrypt = require('bcrypt');           // lib bcrypt pour cryptage password
const jwt = require('jsonwebtoken');        // lib jsonwebtoken pour gestion des token

const db = require('../models');     // models  ( fichier index.js par default)
const User = db.user;



//----------------------- gestion des utilisateurs -------------------------------

//----------------------------------------------------------------------
// requete POST SIGNUP, Ajout d'un utilisateur dans la base de données
//------------------------------------------------------------------------
exports.signup = async function (req, res, next) {

    console.log("Auth signup");
    // --------------- gestion de l'utilisateur ( login name) ------------------
    const user = await User.findOne ({where : { email: req.body.email}}); // await : on attend la reponse
    if(user){  // verif si l'utilisateur est trouvé
        return res.status(401).json({error: 'Utilisateur déjà connue'});
    }
    
    bcrypt.hash(req.body.password, 10)  // 10 tours, semble suffisant pour un bon cryptage pas trop long
        .then(hash => {
            const newUser = new User({
                email: req.body.email,  // email saisie
                username: req.body.username,
                password: hash,          // password crypté
                isAdmin: false
            });
            // sauvegarde du user
            newUser.save()
                .then(() => res.status(201).json({ message: 'Utilisateur enregistré !'}))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error=> res.status(500).json({error}));
};


// exports.signup = (req, res, next) => {
//     User.findOne({
//       attributes: ['email'],
//       where: { email: req.body.email }
//     })
//       .then(user => {
//         if (!user) {
//           bcrypt.hash(req.body.password, 10)
//             .then(hash => {
//               const newUser = {
//                 password: hash,
//                 username: req.body.username,
//                 email: req.body.email,
//                 isAdmin: false,
//               };
//               User.create(newUser)
//                 .then(() => {
//                   res.status(201).json({ message: 'User created !' });
//                 })
//             })
//             //.catch(error => res.status(500).json({ error }));
//             .catch(error => {
//               console.log(error);
//               res.status(500).json({ error })
//             });
//         } else {
//           res.status(409).json({ error: 'Email already used!' })
//         }
//       })
//   };




//--------------------------------------------------------------------------------------------------
// requete POST LOGIN , verification d'un utilisateur dans la base de données,retourne l'id + token signé
//---------------------------------------------------------------------------------------------------
// exports.login = async function (req, res, next) {

//     console.log('controllers login');
//     // --------------- gestion de l'utilisateur ( login name) ------------------
//     const user = await User.findOne ({ email: req.body.email}); // await : on attend la reponse
//     if(!user){  // verif si l'utilisateur est trouvé
//         return res.status(401).json({error: 'Utilisateur inconnue'});
//     }
//     // ---------------- verification du mot de passe -------------------------
//     const passValid = await bcrypt.compare(req.body.password, user.password);
//     if(!passValid){
//         return res.status(401).json({error: 'Password incorrect'});
//     }
    
//     //--------------si identification ok, on renvoi l'id et le token ------------------
//     res.status(200).json({
//         userId: user._id,
//         token: jwt.sign(            // création du token
//             {userId: user._id},
//             'chaine-secrete',       // chaine de cryptage ( 3eme partie)
//             { expiresIn: '24h'}     // token valid 24h
//         )               
//     })
// };

exports.login = (req, res, next) => {
    
    User.findOne({
      where: { email: req.body.login }
    })
      .then(user => {
        //console.log(user);
        if (!user) {
          return res.status(401).json({ error: 'User not found!' });
        }
        bcrypt.compare(req.body.password, user.dataValues.password)
          .then(valid => {
            if (!valid) {
              return res.status(401).json({ error: 'Incorrect password !' });
            }
            res.status(200).json({
              username: user.dataValues.username,
              id: user.dataValues.id,
              isAdmin: user.dataValues.isAdmin,
              token: jwt.sign(
                { userId: user.dataValues.id },
                'chaine-secrete',
                { expiresIn: '24h' }
              )
            });
          })
          .catch(error => res.status(500).json({ error }));
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ error })});
  };
