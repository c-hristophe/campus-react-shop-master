import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, } from "semantic-ui-react";
import Book from "./BookCard";



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
        <div className="expedition">
          <h1>Aucun article à la vente en ce moment</h1>
          </div>
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
