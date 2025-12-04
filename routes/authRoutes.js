const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// // Ncharjiw el package Express w naamlou création el "Router" (ellli ybadel el route)

// // Nimportiw les fonctions 'register' w 'login' mnel 'controller'

// // Route POST /api/auth/register : Bech nsajlou user jdid (tsajjel)
router.post('/register', register);

// // Route POST /api/auth/login : Bech nconectiw (connection)
router.post('/login', login);

// // Nexportiw el router bech najmou nesta3mlouh fil fichier principal (server.js)
module.exports = router;