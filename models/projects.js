//  Nnéchargiw el **package Mongoose**; hédha howa l'interface mta3na m3a MongoDB bech ngériw  el base de données.
const mongoose = require("mongoose");

//  Nétabliou el modèle structurel  mta3 l'entité "Project" fil base de données.
const projectSchema = new mongoose.Schema({
 //  **Identifiant** el projet. Lazem ykoun String w **obligatoire**  bech n'authentifiou bih el Projet.
 nom: { type: String, required: true },
//  Détails w contexte el Projet. Hedha champ optionnel (yénajm ykoun null).
 description: { type: String },
 //  **Référence primaire** (clé étrangère) lel créateur mta3 el projet. Hedha **linkage** 3ala Modèle "User" w **obligatoire**.
 proprietaire: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
 //  **L'état actuel** mta3 el projet. Nest3amlou **'enum'** lel **Validité**. La valeur par défaut hiya "en cours".
 statut: { type: String, enum: ["en cours", "terminé", "en pause"], default: "en cours" },
 //  **Le Timestamp** mta3 el création. Yet7att automatiquement b l'heure w tarikh mta3 el serveur wa9t  l'insertion.
 dateCreation: { type: Date, default: Date.now }
});

// Hena n'exportiw el modèle kemel ta7t esm "User" bech najmou nesta3mlouh fi blayes o5ra fel projet
module.exports = mongoose.model("Project", projectSchema);