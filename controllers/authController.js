const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// // Fonction pour tsajjel un utilisateur jdid
exports.register = async (req, res) => {
 try {
 const { nom, login, motdepasse, role } = req.body;

 // Verifé ken el 'login' mawjoud déja
 const existingUser = await User.findOne({ login });
 if (existingUser) return res.status(400).json({ message: 'Login déjà utilisé' });

 // Hashage mta3 el 'mot de passe'
 const hashedPassword = await bcrypt.hash(motdepasse, 10);

 // Création mta3 el 'utilisateur'
 const newUser = await User.create({
 nom,
 login,
 motdepasse: hashedPassword,
 role
 });

 res.status(201).json({ message: 'Utilisateur créé avec succès', user: newUser });
} catch (err) {
 res.status(500).json({ message: err.message }); }
};

// // Fonction bech taamel connection lel utilisateur
exports.login = async (req, res) => {
try {
 const { login, motdepasse } = req.body;

// Nlawjou 3al 'utilisateur'
 const user = await User.findOne({ login });
 if (!user) return res.status(404).json({ message: 'Utilisateur introuvable' });

 // Nverifiou el 'mot de passe'
 const isMatch = await bcrypt.compare(motdepasse, user.motdepasse);
 if (!isMatch) return res.status(400).json({ message: 'Mot de passe incorrect' });

 // Génération mta3 el 'token JWT'
 const token = jwt.sign(
{ id: user._id, role: user.role },
 process.env.JWT_SECRET,
 { expiresIn: '1h' }
 );

 res.json({ message: 'Connexion réussie', token });
 } catch (err) {
res.status(500).json({ message: err.message });
 }
};