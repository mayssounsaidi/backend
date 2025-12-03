//  Nimportiw el **bibliothèque jsonwebtoken** (jwt) bech n'gérou biha les tokens w n'vérifiou les signatures.
const jwt = require("jsonwebtoken");

//  Nexportiw el **fonction middleware** el matlouba lel **Contrôle d'Authentification** mta3 kol requête.
module.exports = (req, res, next) => {
//  Nestkhérjou el **Token** men el **header 'Authorization'**. N'ést3amlou **'split(" ")[1]'** bech nna77iw el 'Bearer '.
 const token = req.headers.authorization?.split(" ")[1];
 //  N'vérifiw: Ken ma fammech **Token** mawjoud, narj3ou **Réponse 401 (Unauthorized)** w n7absou el processus.
 if (!token) return res.status(401).json({ message: "Accès refusé" });

 //  Nest3amlou 'try...catch' bech n'gérou el **Exceptions** ken sar error fil vérification mta3 el token.
 try {
 //  Nvérifiou el **validité** mta3 el Token b'chiffrage (signature) elli mawjouda fi **JWT_SECRET**.
 const decoded = jwt.verify(token, process.env.JWT_SECRET);
  //  Nzidou el **données** mta3 el User (li 3malnelhom **décodage**) fi **objet req.user**.
  req.user = decoded;
  //  Npassiw el **Contrôle** lel **Middleware** w'el **Route Handler** el jéy.
  next();
 } catch (err) {
     //  Ken famma **Exception** (par exemple, Token expirée walla signature ghalta), narj3ou **Réponse 400 (Bad Request)** w nekfou.
 return res.status(400).json({ message: "Token invalide" });
 }
};