const Projet = require ('../models/projet.model.js');

exports.createProjet = (req, res) => {
	let projet = new Projet(
		{
			userId: req.body.userId,
			userEmail: req.body.userEmail,
			projectName: req.body.projectName,
			description: req.body.description,
			role: req.body.role,
			skills: req.body.skills,
			school: req.body.school
		}
	);
	projet.save( (err) => {
		if (err) {
			console.log(err);
		}

		else {
			console.log("Projet created");
		}
		res.send(projet);
	})
}

exports.getProjet = (req, res) => {
	Projet.find((err, projet) => {
		if(err) {
			console.log(err);
		}
		res.send(projet);
	})
}

exports.oneProjet = (req, res) => {
	Projet.findById(req.params.id, (err, projet) => {
		if(err) {
			console.log(err);
		}
		res.send(projet);
	})
}

exports.removeProjet = (req, res) => {
	Projet.findByIdAndRemove(req.params.id, (err, projet) => {
		if(err) {
			console.log(err);
		}
		res.send("Projet deleted");
	})
}

exports.updateProjet = (req, res) => {
	Projet.findByIdAndUpdate(req.params.id, req.body, (err, projet) => {
		if(err) {
			console.log(err);
		}
		res.send("Projet modified");
	})
}