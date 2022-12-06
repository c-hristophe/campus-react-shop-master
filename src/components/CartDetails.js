import React, { useContext, useRef, useEffect, useState } from "react";
import { Table, Icon, Button, Form } from "semantic-ui-react";
import { CartContext } from "../App";
import '../styles/home.css';
import axios from 'axios';

import StripeContainer from './StripeContainer'




export default function CartDetails() {

  const { cart, removeFromCart, emptyCart, countCartArticles } = useContext(
    CartContext
  );
  const nameImput= useRef();
  const emailImput= useRef();;
  const addressImput= useRef();
  const townImput= useRef();
  const phoneImput = useRef();


const submit= (event) =>{
    event.preventDefault()

    const name = nameImput.current.value;
    const email = emailImput.current.value;
    const address = addressImput.current.value;
    const town = townImput.current.value;
    const phone = phoneImput.current.value;
    const article = (Object.keys(cart).map(key =>cart[key].title)).toString()
    

    axios.get("http://localhost:8000/api/address/")
    .then(res => {
      const books = res.data;
     let findName =((Object.keys(books).map(key =>books[key].name)))
    
    for(var i=0; i<findName.length; i++) {
    if(nameImput.current.value === findName[i]) {
     
       
       var find='1'
     
    }
     
}
      if (find==='1') {
      var article = (Object.keys(books).map(key =>books[key].article)).concat (Object.keys(cart).map(key =>cart[key].title))
        const contact= {
              
          name,
          email, 
          address,
          town,
          phone,
          article : article
          
          }

          console.log(article)

          axios.put(`http://localhost:8000/api/address/${(Object.keys(books).map(key =>books[key]._id))}`, contact)
      .then(res => {
          console.log(res);
          console.log(res.data);
          alert ("Merci pour votre achat, il sera préparé et envoyé dans les meilleurs délais")
      })    


        //**************** */
        Object.keys(cart).map(key => (

          axios.delete(`http://localhost:8000/api/articles/${cart[key]._id}`)
          ))
          
        localStorage.removeItem ("react-shop")
        window.location.reload()  
        
        //prévenir le vendeu de la vente d'un objet 
        
        var note = {
          
          
          title: (Object.keys(cart).map(key =>cart[key].title)).toString(),
          price: (Object.keys(cart).map(key =>cart[key].price)).toString(),
          name,
          address,
          town,
          phone,
          email,
          image: (Object.keys(cart).map(key =>cart[key].image)).toString(),
          
        } 
          
        var box = {
          title: (Object.keys(cart).map(key =>cart[key].title)).toString(),
          price: (Object.keys(cart).map(key =>cart[key].price)).toString(),
          id : (Object.keys(cart).map(key =>cart[key]._id)).toString(),
        }

        console.log(note)
        axios.post("http://localhost:8000/api/box/", box)
        axios.post("http://localhost:8000/api/cart", note)
        .then(res => {
          console.log(res);
          console.log(res.data);
          alert ("Payement accepté")
        })
      }

      if (find!== '1'){
      const contact= {
              
              name,
              email, 
              address,
              town,
              phone,
              article
              
              }

              console.log(contact)

              axios.post("http://localhost:8000/api/address/", contact)
               .then(res => {
                console.log(res);
                console.log(res.data);
                alert ("Coodonnées envoyées")
          })   
          
        
      Object.keys(cart).map(key => (
          
        axios.delete(`http://localhost:8000/api/articles/${cart[key]._id}`)
        ))
        
      localStorage.removeItem ("react-shop")
      window.location.reload()  

      //prévenir le vendeu de la vente d'un objet 


      axios.post("http://localhost:8000/api/box/", box)
      axios.post("http://localhost:8000/api/cart", note)
      .then(res => {
        console.log(res);
        console.log(res.data);
        alert ("Payement accepté")
      }) 

      }
          });
          
////////////////////////////////////////::

/////////////////////////////////////////////////////////////////

}

localStorage.setItem('payment', countCartArticles().toFixed(2)) 

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
            <Table.HeaderCell>Titre</Table.HeaderCell>
            <Table.HeaderCell textAlign="right">Prix unitaire</Table.HeaderCell>
            <Table.HeaderCell textAlign="right">Prix total</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {Object.keys(cart).map(key => (
            <Table.Row key={cart[key].id}>
              <Table.Cell>
                <Icon
                  name="minus square outline"
                  onClick={() => removeFromCart(cart[key])}
                  style={{ cursor: "pointer" }}
                />
                {cart[key].quantity}{" "}
                
              </Table.Cell>
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

      <Form
      action={submit}      
      onSubmit={submit}
      method="POST"
      target="_blank"
      >
     <Form.Group unstackable widths={2} >
        <label for="title">nom</label>
        <input  type="text" ref={nameImput} placeholder="Nom" name="name" required/>
        <label for="title">email</label>
        <input type="email" ref={emailImput} placeholder="Email" name="email" required />
      </Form.Group>
      <Form.Group unstackable widths={2} >
        <label for="title">adresse</label>
        <input  type="text" ref={addressImput} placeholder="Adresse" name="address" required/>
        <label for="title">Ville</label>
        <input type="text" ref={townImput} placeholder="Ville" name="town" required />
        <label for="title">Téléphone</label>
        <input type="text" ref={phoneImput} placeholder="Téléphone" name="phone" required />
      </Form.Group>



    

      <div className="rowContact">
      

          <Button type="submit"> 
        Valider et Payer 
        </Button>
       

        <div id="smart-button-container">
          <div >
            <div id="paypal-button-container"></div>
          </div>
        </div>



      </div>
    </Form>
<StripeContainer/>










      </div>

  

    </>
  );
}
