import React, { useState, useEffect, useContext, } from "react";
import { useParams,  } from "react-router-dom";
import { Image, Card, Grid, Button} from "semantic-ui-react";
import '../styles/home.css';
import axios from 'axios';
import { CartContext } from "../App";
import { useSpring, animated } from "react-spring";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default function SingleCart (data) {
    const { addToCart } = useContext(CartContext);
    const [anim, setAnim] = useState(false);
    const props = useSpring({ to: { x: anim ? 0 : 1 } });
    const [books, setBooks] = useState([]);
  const { cart, } = useContext(
    CartContext
  );


useEffect(() => {
    axios.get(`http://localhost:8000/api/articles/${data._id}`)
    .then(res => {
      const books = res.data;
      console.log(books)
      setBooks(books);
    });
  }, []);

  return (
    <div class= "thumbSingle">
        <Image className='thumbSingle--img' src={data.image}  />
        <Card.Content>
          <Card.Meta>
            {data.title}
            </Card.Meta>
          
          <Card.Description>Description : {data.description}</Card.Description>
          
        </Card.Content>
        <Card.Content extra>
          
            <Button content='Retour' primary
              name="retour"
              size="big"
              onClick={() =>  window.history.back()}
              style={{ cursor: "pointer" }}
            />
            </Card.Content>
          
          
          
      
        
      </div>
  )
}