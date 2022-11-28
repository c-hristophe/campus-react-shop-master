const Box = require('../models/box');



// Lecture de toutes les box
exports.getAllBox = (req, res, next) => {
  Box.find()
    .then(box => res.status(200).json(box))
    .catch(error => res.status(400).json({ error }));
};

//création box
exports.createBox = (req, res, next) => {
    const boxObject = req.body;
    console.log (boxObject)
    delete boxObject._id;
  
    const box = new Box({
      ...boxObject,
      
    });
   
    box.save()
      .then(() => res.status(201).json())
      .catch(error => res.status(400).json({ error }));
  };


// Suppression d'un article de box
exports.deleteBox = (req, res, next) => {
    Box.findOne({_id: req.params.id})
      .then(box => {
            
          box.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ alert: 'ligne supprimée'}))
          .catch(error => res.status(400).json({ error }));
        
      })
      .catch(error => res.status(500).json({ error }));
  };
  