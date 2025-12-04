const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");
const { createTask, assignTask } = require("../controllers/taskController");

// // Ncharjiw les packages (Express, Router, Middlewares)
// // W nimportiw les fonctions mta3 el Controller mta3 les tâches

// // Route POST /api/tasks/ : Bech nsann3ou tâche jdida (ta3mel create)
// // authMiddleware: Lazem el user ykoun connecté (authentifié) bech yekhdem el fonction.
router.post("/", authMiddleware, createTask);

// // Route PUT /api/tasks/assign/:id : Bech t3addi  tâche l user
// // 1. authMiddleware: Lazem el user ykoun connecté.
// // 2. roleMiddleware("manager"): W lazm ykoun 3andou el rôle "manager" bech yanjam ya3mel assignation.
router.put("/assign/:id", authMiddleware, roleMiddleware("manager"), assignTask);

// // Nexportiw el router bech najmou nesta3mlouh fil fichier principal (server.js)
module.exports = router;