import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid,} from "semantic-ui-react";
import Cart from "./cart";


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
  
console.log(books)
  
  return (
    <>
      
      {books.length === 0 ? (
        <div className="expedition">
          <h1>Aucun article à expédier</h1>
          </div>
      ) : (
        <div>

        <div className="card-cart">
    
            <Cart/>
         
          </div>
        </div>
      )}
    </>
  );

}
