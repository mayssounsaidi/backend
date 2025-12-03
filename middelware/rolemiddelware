//  **Middleware d'Autorisation**: N'exportiw **Fonction Factory** elli tkharej el Middleware el ré2isi. Ta9bel el 'role' el matloub k'**paramètre**.
module.exports = (role) => {
 //  Hédhi hiya el **Fonction Middleware** elli tét'exécuta 9bal ma t'éxécuta el Route.
 return (req, res, next) => {
  //  **Vérification du Rôle**: N9arnou el **Rôle actuel** mta3 el moustakhdem (li jé men el req.user) m3a el **Rôle el matloub** (paramètre 'role').
  if (req.user.role !== role) {
   //  Ken el rôles **mouch kif kif**, nraja3oulou **Réponse 403 (Forbidden)**. Ya3ni ma 3andouch el **Permissions** lel ressource hédhi.
   return res.status(403).json({ message: "Accès refusé" });
  }
  //  Ken el rôles **kif kif**, npassiw el **Contrôle** lel **Route Handler** (wella el middleware el jéy) b'fonction 'next()'.
  next();
 };
};