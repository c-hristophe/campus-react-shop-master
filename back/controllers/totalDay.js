const TotalDay = require('../models/totalDay');



// Lecture de toutes les box
exports.getAllTotalDay = (req, res, next) => {
  TotalDay.find()
    .then(box => res.status(200).json(box))
    .catch(error => res.status(400).json({ error }));
};

//création box
exports.createTotalDay = (req, res, next) => {
    const totalDayObject = req.body;
    console.log (totalDayObject)
    delete totalDayObject._id;
  
    const totalDay = new TotalDay({
      ...totalDayObject,
      
    });
   
    totalDay.save()
      .then(() => res.status(201).json())
      .catch(error => res.status(400).json({ error }));
  };


