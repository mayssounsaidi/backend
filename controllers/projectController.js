const Project = require("../models/Project");

// //  création ta3mel projet jdid
exports.createProject = async (req, res) => {
 try {
 const { nom, description, statut } = req.body;
 // naamlou créa tion  lel projet, w n7otou el 'proprietaire' houwa el user elli 3mal el req (req.user.id)
 // W ken el 'statut' ma jetech, n7otou 'en cours' par défaut.
 const project = await Project.create({ nom, description, statut: statut || "en cours", proprietaire: req.user.id });
 res.status(201).json({ message: "Projet créé avec succès", project });
 } catch (err) {
 res.status(500).json({ message: err.message });
 }
};

// // fonction tjib lista mta3 les projets
exports.getProjects = async (req, res) => {
 try {
 let projects;
 // Nverifiou kan el user 'manager'
 if (req.user.role === "manager") {
 // Ken 'manager', ychouf les projets lkol
 projects = await Project.find();
 } else {
 // Sinon, ychouf ken les projets mta3ou houwa (proprietaire = id mte3ou)
 projects = await Project.find({ proprietaire: req.user.id });
 }
 res.json(projects);
} catch (err) {
 res.status(500).json({ message: err.message });
}
};