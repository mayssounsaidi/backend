
// server.js

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user.js');
const Task = require('./models/tasks.js');

 // Assure-toi que le fichier User.js est dans ./models/

const app = express();
app.use(express.json()); // Middleware pour parser JSON

// ---------------------------------------------------------
// Connexion à MongoDB
// ---------------------------------------------------------
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connecté ✅'))
  .catch(err => console.error('Erreur MongoDB :', err));

// ---------------------------------------------------------
// ROUTES
// ---------------------------------------------------------

// Route GET / → test serveur
app.get('/', (req, res) => {
  res.send('Bonjour, le serveur fonctionne !');
});

// Route POST /users → créer un nouvel utilisateur
app.post('/users', async (req, res) => {
  try {
    const { nom, login, motdepasse, role } = req.body;

    const newUser = new User({ nom, login, motdepasse, role });
    await newUser.save();

    res.status(201).json({ message: 'Utilisateur créé ', user: newUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route GET /users → récupérer tous les utilisateurs
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route GET /users/:id → récupérer un utilisateur par ID
app.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route PUT /users/:id → modifier un utilisateur
app.put('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé' });
    res.json({ message: 'Utilisateur mis à jour ✅', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route DELETE /users/:id → supprimer un utilisateur
app.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé' });
    res.json({ message: 'Utilisateur supprimé ✅' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ROUTES TASKS
// ---------------------------------------------------------

// Route POST /tasks → créer une nouvelle tâche
app.post('/tasks', async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json({ message: 'Tâche créée ✅', task });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route GET /tasks → récupérer toutes les tâches
app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route GET /tasks/:id → récupérer une tâche par ID
app.get('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Tâche non trouvée' });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route PUT /tasks/:id → mettre à jour une tâche
app.put('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!task) return res.status(404).json({ message: 'Tâche non trouvée' });
    res.json({ message: 'Tâche mise à jour ✅', task });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route DELETE /tasks/:id → supprimer une tâche
app.delete('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: 'Tâche non trouvée' });
    res.json({ message: 'Tâche supprimée ✅' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// En haut de ton server.js, après l'import de User et Task
const Project = require('./models/projects.js'); // <- Import du modèle Project

// ---------------------------------------------------------
// ROUTES PROJECTS
// ---------------------------------------------------------

// POST /projects → créer un projet
app.post('/projects', async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json({ message: 'Projet créé ✅', project });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /projects → récupérer tous les projets
app.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find().populate('proprietaire', 'nom login');
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /projects/:id → récupérer un projet par ID
app.get('/projects/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id).populate('proprietaire', 'nom login');
    if (!project) return res.status(404).json({ message: 'Projet non trouvé' });
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



// ---------------------------------------------------------
// Démarrer le serveur
// ---------------------------------------------------------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});  

require('dotenv').config();


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connecté '))
  .catch(err => console.error('Erreur MongoDB :', err));

