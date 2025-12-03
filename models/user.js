// Importer la bibliothèque mongoose, el mas2oula 3al ta3amol m3a base de données MongoDB
const mongoose = require("mongoose");

// Hena nasn3ou el "Schema", yaani el kaléb (modèle) mta3 el "User"
// El schema houwa elli i9oul chnouma el ma3loumet (fields) elli lazem tkoun 3and kol user
const userSchema = new mongoose.Schema({
    // Field "nom": Lazem ikoun men naw3 "String" (nass) w "required" (ejberi)
    nom: { type: String, required: true },

    // Field "login": Lazem ikoun "String", "required" (ejberi), w "unique" (ma yodhorlich itkarrer)
    login: { type: String, required: true, unique: true },

    // Field "motdepasse": Lazem ikoun "String" w "required" (ejberi)
    motdepasse: { type: String, required: true },

    // Field "role": Lazem ikoun "String". El "enum" t9oul elli el 9ima mte3ou lazem tkoun ya "user" ya "manager"
    // Ken el 9ima ma t7otetch, par "default" (eftiradhiyan) bch tkoun "user"
    role: { type: String, enum: ["user", "manager"], default: "user" },

    // Field "dateCreation": Ikoun men naw3 "Date" (tarikh)
    // Par "default" (eftiradhiyan) bch ye5ou el wa9t wel tarikh mta3 el la7dha elli tsana3 feha el user
    dateCreation: { type: Date, default: Date.now }
});

// Hena n'exportiw el modèle kemel ta7t esm "User" bech najmou nesta3mlouh fi blayes o5ra fel projet
module.exports = mongoose.model("User", userSchema);