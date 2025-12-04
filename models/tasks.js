const mongoose = require("mongoose");

// Schéma pour la collection "tasks"
const taskSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  description: { type: String },
  statut: { type: String, enum: ["todo", "doing", "done"], default: "todo" },
  deadline: { type: Date },

  // Projet associé (ObjectId vers Project) – optionnel pour tests
  projet: { type: mongoose.Schema.Types.ObjectId, ref: "Project", default: null },

  // Utilisateur assigné (ObjectId vers User) – optionnel
  utilisateur: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },

  dateCreation: { type: Date, default: Date.now }
});

// Export du modèle Task
module.exports = mongoose.model("Tasks", taskSchema);
