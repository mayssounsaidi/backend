// models/projects.js
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  description: { type: String },
  proprietaire: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  statut: { type: String, enum: ['en cours', 'terminé', 'en pause'], default: 'en cours' },
  dateCreation: { type: Date, default: Date.now }
});

module.exports = mongoose.model("projects", projectSchema);
