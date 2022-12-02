import React from 'react'
import  {  useState, useEffect } from "react";
import { Card, Image,  Button } from "semantic-ui-react";
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

  


for (let i=0; i<books.length; i++){

 const id = Object.keys(books).map(key => (books[key]._id))
 const  title = Object.keys(books).map(key => (books[key].title))
 const  image= Object.keys(books).map(key => (books[key].image))
 const  price= Object.keys(books).map(key => (books[key].price))
 const  name = Object.keys(books).map(key => (books[key].name))
 const  address= Object.keys(books).map(key => (books[key].address))
 const  town= Object.keys(books).map(key => (books[key].town))
 const  email= Object.keys(books).map(key => (books[key].email))
 const  phone= Object.keys(books).map(key => (books[key].phone))
 


function deleteFromCart() {
  
  axios.delete(`http://localhost:8000/api/cart/${id[i]}`)
  window.location.reload()

}

console.log (title[i])

 return (
    
    <div className= "thumb">
      
      <Image className='thumb--img' src={image[i]}  />

      <Card.Content>
        
        <Card.Meta>
          {title[i]}
          </Card.Meta>
        <Card.Meta>
          <span className="prix">Prix {price[i]} €</span>
        </Card.Meta>
            
        <Card.Meta>
          <p className="prix">Acheteur: {name[i]}</p>
          <p className="prix">Adresse: {address[i]}</p>
          <p className="prix">Ville: {town[i]}</p>
          <p className="prix">Mail: {email[i]}</p>
          <p className="prix">Téléphone: {phone[i]}</p>
        </Card.Meta>

        <Button content='Expédié' primary
              name="expédié"
              size="big"
              onClick={deleteFromCart}
              style={{ cursor: "pointer" }}
            />

      </Card.Content>
      
    </div>
    
  )}
  return null;
}
