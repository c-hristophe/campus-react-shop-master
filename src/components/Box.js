import React, { useContext, useState, useEffect } from "react";
import { Table, Icon, Button, Form } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CartContext } from "../App";
import '../styles/home.css'
import axios from 'axios';


export default function CartDetails() {
  const { cart, addToCart, removeFromCart, emptyCart, countCartArticles } = useContext(
    CartContext
  );
  
//***********
function TotalDay(){

  var totalDay = {
     
    
    title: (Object.keys(cart).map(key =>cart[key].title)).toString(),
    price: (Object.keys(cart).map(key =>cart[key].price)).toString(),
    _id: (Object.keys(cart).map(key =>cart[key]._id)).toString(),

  } 
    
   console.log(totalDay)

  axios.post("http://localhost:8000/api/box", totalDay)
  .then(res => {
    console.log(res);
    console.log(res.data);
    alert ("Payement accepté")
  })

}

  return (
    <>
      <div className="panier">
        {" "}
        <Icon
          name="trash alternate"
          onClick={emptyCart}
          style={{ cursor: "pointer" }}
        />
        <span>vider le caddie</span>
      </div>

      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine textAlign="center">
              Quantité
            </Table.HeaderCell>
            <Table.HeaderCell>Référence</Table.HeaderCell>
            <Table.HeaderCell>Titre</Table.HeaderCell>
            <Table.HeaderCell textAlign="right">Prix unitaire</Table.HeaderCell>
            <Table.HeaderCell textAlign="right">Prix total</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {Object.keys(cart).map(key => (
            <Table.Row key={cart[key].id}>
              <Table.Cell>
                
                {cart[key].quantity}{" "}
                
              </Table.Cell>
              <Table.Cell singleLine>{cart[key]._id}</Table.Cell>
              <Table.Cell singleLine>{cart[key].title}</Table.Cell>
              <Table.Cell textAlign="right">{cart[key].price} €</Table.Cell>
              <Table.Cell textAlign="right">
                {(cart[key].quantity * cart[key].price).toFixed(2)} €
              </Table.Cell>
              
            </Table.Row>
            
          ))}
          
        </Table.Body>
      </Table>
      <div className="totalPrix">
        Le montant total à régler est de  {countCartArticles().toFixed(2)}  €
      </div>
      <div>
      <Form onSubmit={TotalDay} >
            <Button type='submit'>Valider total journée</Button>
              </Form>

      </div>
      
      
    </>
  );
}
