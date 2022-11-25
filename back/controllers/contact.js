const Contact = require('../models/contact');

exports.createContact = (req, res, next) => {
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