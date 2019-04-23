const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UtilisateurSchema = new Schema({
	username: String,
	firstname:String,
	name:String,
	school:String,
    mail:String,
    password:String,
    skills: String
});


// Export the model
module.exports = mongoose.model('Utilisateur', UtilisateurSchema);  