// Importer la bibliothèque mongoose, el mas2oula 3al ta3amol m3a base de données MongoDB
const mongoose = require("mongoose");

// Hena nasn3ou el "Schema", yaani el kaléb (modèle) mta3 el "Task" (tâche)
// El schema houwa elli i9oul chnouma el ma3loumet (fields) elli lazem tkoun 3and kol tâche
const taskSchema = new mongoose.Schema({
    // Field "titre": Lazem ikoun men naw3 "String" (nass) w "required" (ejberi)
    titre: { type: String, required: true },

    // Field "description": Lazem ikoun "String" w ma houwech ejberi
    description: { type: String },

    // Field "statut": Lazem ikoun "String". El "enum" t9oul elli el 9ima mte3ou lazem tkoun ya "todo", ya "doing", ya "done"
    // Ken el 9ima ma t7otetch, par "default" (eftiradhiyan) bch tkoun "todo"
    statut: { type: String, enum: ["todo", "doing", "done"], default: "todo" },

    // Field "deadline": Ikoun men naw3 "Date" (tarikh) w ma houwech ejberi
    deadline: { type: Date },

    // Field "projet": Hédha houwa "Reference" (référence) mta3 l'ID mta3 el "Project" (projet) elli taba3 lih el tâche héthi
    // Lazem ikoun "ObjectId" (l'ID mta3 MongoDB) w "required" (ejberi)
    projet: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: true },

    // Field "utilisateur": Hédha houwa "Reference" mta3 l'ID mta3 el "User" (utilisateur) elli m'asssigné lel tâche
    // Par "default" (eftiradhiyan) ykoun *null* (ma fama 7atta *user* m'asssigné)
    utilisateur: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },

    // Field "dateCreation": Ikoun men naw3 "Date" (tarikh)
    // Par "default" (eftiradhiyan) bch ye5ou el wa9t wel tarikh mta3 el la7dha elli tsana3et feha el tâche
    dateCreation: { type: Date, default: Date.now }
});

// Hena n'exportiw el modèle kemel ta7t esm "Task" bech najmou nesta3mlouh fi blayes o5ra fel projet
module.exports = mongoose.model("Task", taskSchema);