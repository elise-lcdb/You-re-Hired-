
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProjetSchema = new Schema (
	{
		userId: String,
		userEmail: String,
		projectName: String,
		description: String,
	}
);

module.exports = mongoose.model('Projet', ProjetSchema);