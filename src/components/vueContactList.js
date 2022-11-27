import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Segment } from "semantic-ui-react";
import VueContact from "./vueContact";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SingleProduct from "./SingleProduct"

export default function vueContactList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/contact/")
    .then(res => {
      const books = res.data;
      setBooks(books);
    });
  }, []);
  console.log(books.length)
  localStorage.setItem('messages', (books.length))
  return (
    <>
      
      {books.length === 0 ? (
        <div className="expedition">
          <h1>Pas de message</h1>
          </div>
      ) : (
        <div>

<div className="card">
    
            {books.map(b => (
              <Grid.Column key={b._id}>
               
                   <VueContact data={b} />
             
                  
               
              </Grid.Column>
            ))}
         
          </div>
        </div>
      )}
    </>
  );
}
