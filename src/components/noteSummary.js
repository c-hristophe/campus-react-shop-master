
import { CartCard } from "../App";
import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../App";
import axios from "axios";
import { Container, Menu, Icon, Button } from "semantic-ui-react";

export default function LoginSummary() {
  const [cde, setCde] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/cart/")
    .then(res => {
      const cde = res.data;
      setCde(cde);
    });
  }, []);
  var numberOfCde = cde.length

  return (
    <>
      <span><Icon name="cart" size="big" />  ({numberOfCde})</span>
    </>
  );
}
