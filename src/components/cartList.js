import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Segment } from "semantic-ui-react";
import Cart from "./cart";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SingleProduct from "./SingleProduct"
import '../styles/home.css'

export default function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/cart")
    .then(res => {
      const books = res.data;
      setBooks(books);
    });
  }, []);
  


  return (
    <>
      
      {books.length === 0 ? (
        <div className="expedition">
          <h1>Aucun article à expédier</h1>
          </div>
      ) : (
        <div>

<div className="card">
    
            {books.map(b => (
              <Grid.Column key={b._id}>
               
                   <Cart data={b} />
             
                  
               
              </Grid.Column>
            ))}
         
          </div>
        </div>
      )}
    </>
  );
}
