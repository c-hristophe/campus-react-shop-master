const Cart = require('../models/cart');



// Lecture de toutes les cart
exports.getAllcarts = (req, res, next) => {
  Cart.find()
    .then(cart => res.status(200).json(cart))
    .catch(error => res.status(400).json({ error }));
};

//création cart
exports.createcart = (req, res, next) => {
    const cartObject = req.body;
    console.log (cartObject)
    delete cartObject._id;
  
    const cart = new Cart({
      ...cartObject,
      
    });
    console.log(cart)
    cart.save()
      .then(() => res.status(201).json())
      .catch(error => res.status(400).json({ error }));
  };


// Suppression d'un article de cart
exports.deleteCart = (req, res, next) => {
    Cart.findOne({_id: req.params.id})
      .then(cart => {
            
          cart.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ alert: 'Payement accepté'}))
          .catch(error => res.status(400).json({ error }));
        
      })
      .catch(error => res.status(500).json({ error }));
  };
  