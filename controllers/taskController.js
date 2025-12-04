const Task = require("../models/Task");

// // Fonction ta3mel tâche jdida
exports.createTask = async (req, res) => {
 try {
 const { titre, description, statut, projet } = req.body;
 // naa3mlou el tâche, w n7otou el 'statut' 'todo' par défaut (ken ma jetich)
 // W ma n7ottouch 'utilisateur' tawa (null)
 const task = await Task.create({ titre, description, statut: statut || "todo", projet, utilisateur: null });
 res.status(201).json({ message: "Tâche créée avec succès", task });
} catch (err) {
res.status(500).json({ message: err.message });
 }
};

// // Fonction t3addi tâche l user
exports.assignTask = async (req, res) => {
 try {
 const { utilisateur } = req.body;
 // Nlawjou 3al tâche bel ID (req.params.id) w nbaddlou kan el 'utilisateur'
 // { new: true } tkhallina nraj3ou el version el jdida mta3 el tâche
 const task = await Task.findByIdAndUpdate(req.params.id, { utilisateur }, { new: true });
 res.json({ message: "Tâche assignée avec succès", task });
 } catch (err) {
 res.status(500).json({ message: err.message });
 }
};