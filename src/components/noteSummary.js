

import React, {  useState, useEffect } from "react";

import axios from "axios";
import { Icon,  } from "semantic-ui-react";

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
