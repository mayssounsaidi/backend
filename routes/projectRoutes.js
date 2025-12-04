const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const { createProject, getProjects } = require("../controllers/projectController");

// // Ncharjiw el package Express, naamlou création el 'Router', nimportiw el Middleware mta3 l'Auth
// // W nimportiw les fonctions mta3 el Controller ('createProject' w 'getProjects')

// // Route POST /api/projects/ : Bech nsann3ou projet jdid (ta3mel create)
// // authMiddleware: Lazem el user ykoun connecté (authentifié) bech tekhdem el fonction.
router.post("/", authMiddleware, createProject);

// // Route GET /api/projects/ : Bech njibou les projets
// // authMiddleware: Lazem el user ykoun connecté
router.get("/", authMiddleware, getProjects);

// // N'exportiw el router bech najmou nesta3mlouh fil fichier principal (server.js)
module.exports = router;