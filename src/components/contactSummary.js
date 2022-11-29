
import { CartCard } from "../App";
import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../App";
import axios from "axios";
import { Container, Menu, Icon, Button } from "semantic-ui-react";

export default function LoginSummary() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/contact/")
    .then(res => {
      const books = res.data;
      setBooks(books);
    });
  }, []);

  var numberOfMessages = books.length

  return (
    <>
      <span><Icon name="mail" size="big" />  ({numberOfMessages})</span>
    </>
  );
}
