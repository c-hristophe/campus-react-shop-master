import React from 'react'
import  { useContext, useState } from "react";
import { useSpring, animated } from "react-spring";
import { Card, Image, Icon, Button } from "semantic-ui-react";
import { CartContext } from "../App";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../styles/home.css'
import axios from 'axios'

export default function CartCard({ data }) {
  const { addToCart } = useContext(CartContext);
  const [anim, setAnim] = useState(false);
  const props = useSpring({ to: { x: anim ? 0 : 1 } });
  const { cart, } = useContext(
    CartContext
  );

  

 
  return (
    
    <div class= "thumb">
      <Link to={`/singleCart/${data._id}`}>
      <Image className='thumb--img' src={data.image}  />
      </Link>
      <Card.Content>
        <Card.Meta>
          {data.title}
          </Card.Meta>
        <Card.Meta>
          <span className="prix">Prix {data.price} €</span>
        </Card.Meta>
            
        <Card.Meta>
          <span className="prix">Etat : {data.state}</span>
        </Card.Meta>

        
      </Card.Content>
      
        
      
     
    </div>
    
  );
}
