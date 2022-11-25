import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Segment } from "semantic-ui-react";
import Book from "./BookCard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SingleProduct from "./SingleProduct"

export default function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/articles")
    .then(res => {
      const books = res.data;
      setBooks(books);
    });
  }, []);
  
  return (
    <>
      
      {books.length === 0 ? (
        <div>loading...</div>
      ) : (
        <div>

<div className="card">
    
            {books.map(b => (
              <Grid.Column key={b._id}>
               
                   <Book data={b} />
             
                  
               
              </Grid.Column>
            ))}
         
          </div>
        </div>
      )}
    </>
  );
}
