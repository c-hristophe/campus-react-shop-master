// Création du serveur
const http = require('http');
const app = require('./app');
require("dotenv").config();

//********************** */
//stripe

const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

const stripe = require("stripe")(process.env.SECRET_KEY);
const cors = require ('cors')
const express = require("express");

app.use(bodyParser.urlencoded({extender: true}))
app.use (bodyParser.json());
app.use(cors());

app.post("/stripe", cors( async (req,res)=>{
  let {amount, id} =req.body;
  console.log("amount, id",amount, id)
  try {
    const payment = await stripe.paymentIntents.create({
      amount : amount,
      currency: "EUR",
      description: "company",
      payment_methode : id,
      confirm : true,
    });
    res.json({
      message: "paiement réussi",
      success: true,
    })
  }catch (error){
  console.log(error);
    res.json({
      message: "le paiement a échoué",
      success: false,
  })
}
}))

//***************** */

// Renvoie d'un port valide
const normalizePort = val => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};
const port = normalizePort(process.env.PORT || '8000');
app.set('port', port);

// Recherche des différentes erreurs et comment les gérer
const errorHandler = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const server = http.createServer(app);

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

server.listen(port);


