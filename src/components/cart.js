import React from 'react'
import  { useContext, useState } from "react";
import { useSpring, animated } from "react-spring";
import { Card, Image, Icon, Button } from "semantic-ui-react";
import { CartContext } from "../App";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../styles/home.css'

export default function CartCard({ data }) {
  const { addToCart } = useContext(CartContext);
  const [anim, setAnim] = useState(false);
  const props = useSpring({ to: { x: anim ? 0 : 1 } });
  
  
 
 
  return (
    
    <div class= "thumb">
      
      <Image className='thumb--img' src={data.image}  />
     
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

        <Button content='Ajouter au panier' primary
            name="add to cart"
            size="big"
            
            style={{ cursor: "pointer" }}
          />
      </Card.Content>
      
        
      
     
    </div>
    
  );
}
