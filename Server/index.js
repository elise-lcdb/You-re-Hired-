const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
var cors = require('cors');
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(bodyParser.json());

app.use(function(req, res, next) {
	res.setHeader('Content-type', 'application/json');
	res.setHeader('Accept', 'application/json');
	res.setHeader('Accept', 'application/x-www-form-urlencoded');
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Content-type, X-Requested-With, Authorization, Access-Control-Allow-Origin');
	next();

});
mongoose.connect('mongodb://elise:a0a0a0@ds119734.mlab.com:19734/nodejs-dev-1', (err) => {
	if(err) {
		console.log('Database not found');
	}
	else {
		console.log('Database connected');
	}
})




//user

app.post('/api/v1/utilisateur/add', UtilisateurController.createUtilisateur);
app.get('/api/v1/utilisateur', UtilisateurController.getUtilisateur);
app.get('/api/v1/utilisateur/:id', UtilisateurController.oneUtilisateur);
app.get('/api/v1/utilisateur/remove/:id', UtilisateurController.removeUtilisateur);
app.put('/api/v1/utilisateur/:id', UtilisateurController.updateUtilisateur);

//code de William

//app.get('/utilisateur', utilisateurController.getUtilisateur);
//app.post('/createUtilisateur', utilisateurController.createUtilisateur);
//app.get('/utilisateur/:id', utilisateurController.getUtilisateurById);
//app.get('/utilisateur/:id/remove', utilisateurController.deleteUtilisateur);
//app.post('/utilisateur/:id/update', utilisateurController.updateUtilisateur);


//Projet
app.post('/api/v1/projet/add', ProjetController.createProjet);
app.get('/api/v1/projet', ProjetController.getProjet);
app.get('/api/v1/projet/:id', ProjetController.oneProjet);
app.get('/api/v1/projet/remove/:id', ProjetController.removeProjet);
app.put('/api/v1/projet/:id', ProjetController.updateProjet);

app.listen(port, () => {
	console.log(`Server on on port ${port}`);
})