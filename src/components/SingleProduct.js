import React, { useState, useEffect, useContext, } from "react";
import { useParams,  } from "react-router-dom";
import { Image, Card, Grid, Button} from "semantic-ui-react";
import '../styles/home.css';
import axios from 'axios';
import { CartContext } from "../App";
import { useSpring, animated } from "react-spring";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function SingleProduct (data) {
  const { addToCart } = useContext(CartContext);
  const [anim, setAnim] = useState(false);
  const props = useSpring({ to: { x: anim ? 0 : 1 } });
  


useEffect(() => {
    axios.get("http://localhost:8000/api/articles/")
    .then(res => {
      const books = res.data;
      console.log(books)
      setBooks(books);
    });
  }, []);

  const { productId } = useParams();
  console.log(productId)
  localStorage.setItem('obj', productId)
  const [books, setBooks] = useState([]);  
  const product = books.find((books) => books._id === productId);  

  
    if (product !== undefined) {
      const{title, image, price, description} =product



const isOn= localStorage.getItem ('isOn')


return (
  <div class= "thumbSingle">
      <Image className='thumbSingle--img' src={image}  />
      <Card.Content>
        <Card.Meta>
          {title}
          </Card.Meta>
        
        <Card.Description>Description : {description}</Card.Description>
        
      </Card.Content>
      <Card.Content extra>
        
          <Button content='Retour' primary
            name="retour"
            size="big"
            onClick={() =>  window.history.back()}
            style={{ cursor: "pointer" }}
          />
          </Card.Content>
         <Card.Content extra>
        
        
    
      </Card.Content>
      {isOn ==='1' && <Link to={`/FormModify/${productId}`}>Modifier
                   
                   </Link>}
    </div>
)


}    
return null;

};




