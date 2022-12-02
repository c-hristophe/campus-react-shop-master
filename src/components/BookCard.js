import React, { useContext, useState } from "react";
import { useSpring, animated } from "react-spring";
import { Card, Image, Button } from "semantic-ui-react";
import { CartContext } from "../App";
import { BrowserRouter as  Link } from "react-router-dom";
import '../styles/home.css'

export default function BookCard({ data }) {
  const { addToCart } = useContext(CartContext);
  const [anim, setAnim] = useState(false);
  const props = useSpring({ to: { x: anim ? 0 : 1 } });
  
 
  function handleAddToCart(data) {
    setAnim(!anim);
    addToCart(data);
  }
 
  return (
    
    <div class= "thumb">
      <Link to={`/SingleProduct/${data._id}`}>
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
      <Card.Content extra>
        <animated.div
          style={{
            transform: props.x
              .interpolate({
                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                output: [1, 0.97, 0.95, 1.1, 0.95, 1.1, 1.03, 1]
              })
              .interpolate(x => `scale(${x})`)
          }}
        >
          <Button content='Ajouter au panier' primary
            name="add to cart"
            size="big"
            onClick={() => handleAddToCart(data)}
            style={{ cursor: "pointer" }}
          />
          
        </animated.div>
        <Link to="/Contact">Contacter le vendeur
                   
        </Link>
      </Card.Content>
     
    </div>
    
  );
}
