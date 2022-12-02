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
    
    delete boxObject._id;
  
    const box = new Box({
      ...boxObject,
      
    });
   
    box.save()
      .then(() => res.status(201).json())
      .catch(error => res.status(400).json({ error }));
  };


// Suppression de box
exports.deleteBox = (req, res, next) => {
    Box.collection.drop()
    
  };
  