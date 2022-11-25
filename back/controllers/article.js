const Article = require('../models/article');
const fs = require('fs');


// Lecture de toutes les articles dans la base de données
exports.getAllarticles = (req, res, next) => {
  Article.find()
    .then(articles => res.status(200).json(articles))
    .catch(error => res.status(400).json({ error }));
};

// Lecture d'une article avec son ID 
exports.getOnearticle = (req, res, next) => {
  Article.findOne({ _id: req.params.id })
    .then(article => res.status(200).json(article))
    .catch(error => res.status(404).json({ error }));
};

// Création d'une nouvelle article 
exports.createarticle = (req, res, next) => {
  const articleObject = req.body;
  console.log (articleObject)
  delete articleObject._id;

  const article = new Article({
    ...articleObject,
    
  });
  
  article.save()
    .then(() => res.status(201).json({ alert: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
};

//modification d'une article
exports.modifyarticle = (req, res, next) => {
  const articleObject = req.file ? {
      ...req.body.article,
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body }; 
  
      Article.updateOne({ _id: req.params.id}, { ...articleObject, _id: req.params.id})
        .then(() => res.status(200).json({alert : 'Objet modifié!'}))
        .catch(error => res.status(401).json({ error }));
}
        

// Suppression d'un article
exports.deletearticle = (req, res, next) => {
  Article.findOne({_id: req.params.id})
    .then(article => {
          
        article.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ alert: 'Objet supprimé !'}))
        .catch(error => res.status(400).json({ error }));
      
    })
    .catch(error => res.status(500).json({ error }));
};
