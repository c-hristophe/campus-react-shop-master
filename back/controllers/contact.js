const Contact = require('../models/contact');

exports.creatContact = (req, res, next) => {
    const contactObject = req.body;
    
    delete contactObject._id;
  
    const contact = new Contact({
      ...contactObject,
      
    });
    
    contact.save()
      .then(() => res.status(201).json())
      .catch(error => res.status(400).json({ error }));
  };

  exports.getAllcontacts = (req, res, next) => {
    Contact.find()
      .then(contact => res.status(200).json(contact))
      .catch(error => res.status(400).json({ error }));
  };

  exports.deleteContact = (req, res, next) => {
    Contact.findOne({_id: req.params.id})
      .then(cart => {
            
          Contact.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ alert: 'supprimé !'}))
          .catch(error => res.status(400).json({ error }));
        
      })
      .catch(error => res.status(500).json({ error }));
  };