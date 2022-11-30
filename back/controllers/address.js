const Address = require('../models/address');

exports.creatAddress = (req, res, next) => {
    const addressObject = req.body;
    
    delete addressObject._id;
  
    const address = new Address({
      ...addressObject,
      
    });
    
    address.save()
      .then(() => res.status(201).json())
      .catch(error => res.status(400).json({ error }));
  };

  exports.getAllAddresses = (req, res, next) => {
    Address.find()
      .then(address => res.status(200).json(address))
      .catch(error => res.status(400).json({ error }));
  };

  exports.modifyAddress = (req, res, next) => {
    const addressObject = req.file ? {
        ...req.body.address,
        
      } : { ...req.body }; 
    
        Address.updateOne({ _id: req.params.id}, { ...addressObject, _id: req.params.id})
          .then(() => res.status(200).json({alert : 'modifié!'}))
          .catch(error => res.status(401).json({ error }));
  }