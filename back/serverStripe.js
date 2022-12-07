//stripe
const express = require("express");
require("dotenv").config()
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const app= express()
const stripe = require("stripe")(process.env.SECRET_KEY);
const cors = require ('cors')


app.use(bodyParser.urlencoded({extender: true}))
app.use (bodyParser.json());
app.use(cors());

app.post("/stripe/charge", jsonParser, cors(), async (req, res)=>{
  let {amount, id} =req.body;
  console.log("amount, id",amount, id)
  try {
    const payment = await stripe.paymentIntents.create({
      amount : amount,
      currency: "EUR",
      description: "company",
      payment_method : id,
      confirm : true,
    });
     
    res.json({ id: session.id });

  }catch (error){
  return res.status(500).send(`paiement en échec ${err}`);
}
})

app.listen (process.env.PORT || 8080, () =>{
    console.log ("serveur démarré!")
})