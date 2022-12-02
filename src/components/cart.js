import React from 'react'
import  { useContext, useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { Card, Image, Icon, Button } from "semantic-ui-react";
import { CartContext } from "../App";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../styles/home.css'
import axios from 'axios'



export default function CartCard() {
  const [books, setBooks] = useState([]);  

  useEffect(() => {
    axios.get("http://localhost:8000/api/cart")
    .then(res => {
      const books = res.data;
      setBooks(books);
    });
  }, []);
  

console.log (books)


function deleteFromCart() {
  
  axios.delete(`http://localhost:8000/api/cart/${Object.keys(books).map(key => (books[key]._id))}`)
  window.location.reload()

}

for (let i=0; i<books.length; i++){
 var title = Object.keys(books).map(key => (books[key].title))[i]
 var image= Object.keys(books).map(key => (books[key].image))[i]
 var price= Object.keys(books).map(key => (books[key].price))[i]
 var name = Object.keys(books).map(key => (books[key].name))[i]
 var address= Object.keys(books).map(key => (books[key].address))[i]
 var town= Object.keys(books).map(key => (books[key].town))[i]
 var email= Object.keys(books).map(key => (books[key].email))[i]
 var phone= Object.keys(books).map(key => (books[key].phone))[i]
 

console.log (title)
}

 return (
    
    <div className= "thumb">
      
      <Image className='thumb--img' src={image}  />

      <Card.Content>
        
        <Card.Meta>
          {title}
          </Card.Meta>
        <Card.Meta>
          <span className="prix">Prix {price} €</span>
        </Card.Meta>
            
        <Card.Meta>
          <p className="prix">Acheteur: {name}</p>
          <p className="prix">Adresse: {address}</p>
          <p className="prix">Ville: {town}</p>
          <p className="prix">Mail: {email}</p>
          <p className="prix">Téléphone: {phone}</p>
        </Card.Meta>

        <Button content='Expédié' primary
              name="expédié"
              size="big"
              onClick={deleteFromCart}
              style={{ cursor: "pointer" }}
            />

      </Card.Content>
      
    </div>
    
  );
}
