const Utilisateur = require('../Models/utilisateur.model.js');
const fs = require('fs');


exports.createUtilisateur = function(req, res) {
    console.log(req.body);
    let utilisateur = new Utilisateur(
        {
            username: req.body.username,
            firstname: req.body.firstname,
            name: req.body.name,
            school: req.body.school,
            mail: req.body.mail,
            password: req.body.password,
            skills: req.body.skills         
        }
    );

    utilisateur.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send(utilisateur)
    })
};

exports.getUtilisateur = (req,res) =>{
    Utilisateur.find((err,Utilisateur) =>{
        if(err){
            console.log(err);
        }
        res.send(Utilisateur);
    })  
};


exports.getUtilisateurById = (req,res) =>{
    // recuperer un user en fonction de son id 
    Utilisateur.findById(req.params.id, (err,utilisateur) =>{
        if(err){
            console.log(err);
        }
        //res.send(produit);
        res.send(utilisateur);
    })      
};

exports.deleteUtilisateur = (req,res) =>{
    // recuperer un user en fonction de son id 
    Utilisateur.findByIdAndRemove(req.params.id, (err, utilisateur) =>{
        if(err) {
            console.log(err);
        }
        // Si le delete marche on redirige la page vers l'accueil
        else    
            {
            res.redirect('/utilisateur');
        }
    })  
};

exports.updateUtilisateur= (req,res) =>{
    // recuperer un user en fonction de son id 
    Utilisateur.findByIdAndUpdate(req.params.id,req.body,(err, utilisateur)=>{
        if(err) {
            console.log(err);
        }
        else    
        {
            console.log('updated');
        }
        res.send(utilisateur);
    })
};
