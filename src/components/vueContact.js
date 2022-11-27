import React from 'react'
import { useEffect, useState } from 'react';
import { Card, Image, Icon, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import '../styles/home.css'
import axios from 'axios'

export default function CartCard({ data }) {

    const [books, setBooks] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/contact/")
        .then(res => {
          const books = res.data;
          setBooks(books);
        });
      }, []);




console.log(data._id)

function sup() {
    
    axios.delete(`http://localhost:8000/api/contact/${data._id}`)
    alert('supprimé')
    window.location.reload()
}
function mailTo () {
    
      var mailto_link = 'mailto:' + data.email
      window.open(mailto_link, 'emailWindow')
      
}

  return (
    
    <div class= "thumb">
      
      <Card.Content>
        <Card.Meta>
          {data.name}
          </Card.Meta>
        <Card.Meta>
          <a > {data.email}</a>
        </Card.Meta>
            
        <Card.Meta>
          <span className="prix"> {data.message}</span>
        </Card.Meta>
        <Button content='Supprimer' primary
              name="supprime"
              size="big"
              onClick={sup}
              style={{ cursor: "pointer" }}
            />
         <Button content='répondre' primary
              name="ans"
              size="big"
              onClick={mailTo}
              style={{ cursor: "pointer" }}
            />
             
        
      </Card.Content>
      
        
      
     
    </div>
    
  );
}
