import React from 'react'
import  {  useState, useEffect } from "react";
import { Card, Image, Button } from "semantic-ui-react";
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
  
 
console.log (Object.keys(books).map(key => (books[key].title)))
for(let i=0; i<books.length; i++ ) {
  console.log(books[i].title)
}

for(let i=0; i<books.length; i++ ) {

function deleteFromCart() {
  axios.delete(`http://localhost:8000/api/cart/${Object.keys(books).map(key => (books[key]._id))[i]}`)
  window.location.reload()
}



  console.log(books[i].title)
 
  return (
    
    <div className= "thumb">
      
      <Image className='thumb--img' src={books[i].image}  />

      <Card.Content>
        <Card.Meta>
      {books[i].title}
          </Card.Meta>
        <Card.Meta>
          <span className="prix">Prix {books[i].price} €</span>
        </Card.Meta>
            
        <Card.Meta>
          <p className="prix">Acheteur: {books[i].name}</p>
          <p className="prix">Adresse: {books[i].address}</p>
          <p className="prix">Ville: {books[i].town}</p>
          <p className="prix">Mail: {books[i].email}</p>
          <p className="prix">Téléphone: {books[i].phone}</p>
        </Card.Meta>

        <Button content='Expédié' primary
              name="expédié"
              size="big"
              onClick={deleteFromCart}
              style={{ cursor: "pointer" }}
            />

      </Card.Content>
      
        
      
     
    </div>
    
  )};
  return null
}
