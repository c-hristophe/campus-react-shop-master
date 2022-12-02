import React, { useState, useEffect, } from "react";
import { useParams,  } from "react-router-dom";
import { Image, Card, Button} from "semantic-ui-react";
import '../styles/home.css';
import axios from 'axios';




export default function SingleCart (data) {
    

const id= useParams()
console.log (id.productId)

useEffect(() => {
    axios.get(`http://localhost:8000/api/cart/`)
    .then(res => {
      const book = res.data;
      console.log(book)
     setBooks(book)
    });
    
    
  }, []);

  
  const [book, setBooks] = useState([]);  
  console.log(book)
  const product = book.find((book) => book._id === id.productId);  
 
  
    if (product !== undefined) {
      const{title, image, price} =product
 console.log(product)

function deleteFromCart() {
    axios.delete(`http://localhost:8000/api/cart/${id.productId}`)
    window.location.reload()
}

  return (
    <div class= "thumbSingle">
        <Image className='thumbSingle--img' src={image}  />
        <Card.Content>
          <Card.Meta>
            {title}
            </Card.Meta>
          
          <p>Prix : {price} €</p>
          
        </Card.Content>
        <Card.Content extra>
          
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