const Customer = require('../models/customer');

exports.creatCustomer = (req, res, next) => {
    const customerObject = req.body;
    
    delete customerObject._id;
  
    const customer = new Customer({
      ...customerObject,
      
    });
    
    customer.save()
      .then(() => res.status(201).json())
      .catch(error => res.status(400).json({ error }));
  };

  exports.getAllcustomers = (req, res, next) => {
    Customer.find()
      .then(customer => res.status(200).json(customer))
      .catch(error => res.status(400).json({ error }));
  };

  exports.deleteCustomer = (req, res, next) => {
    Customer.findOne({_id: req.params.id})
      .then(cart => {
            
          Customer.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ alert: 'supprimé !'}))
          .catch(error => res.status(400).json({ error }));
        
      })
      .catch(error => res.status(500).json({ error }));
  };

  exports.modifyCustomer = (req, res, next) => {
    const customerObject = req.file ? {
        ...req.body.customer,
        
      } : { ...req.body }; 
    
        Customer.updateOne({ _id: req.params.id}, { ...customerObject, _id: req.params.id})
          .then(() => res.status(200).json({alert : 'modifié!'}))
          .catch(error => res.status(401).json({ error }));
  }