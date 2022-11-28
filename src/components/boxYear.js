import React, { useContext, useState, useEffect } from "react";
import { Table, Icon, Button, Form } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CartContext } from "../App";
import '../styles/home.css'
import axios from 'axios';


export default function CartDetails() {
  
  
//***********
const [totalDay, setTotalDay] = useState([]);

useEffect(() => {
  axios.get("http://localhost:8000/api/totalDay")
  .then(res => {
    const totalDay = res.data;
    setTotalDay(totalDay);
  });
}, []);




Object.keys(totalDay).map(key => (
    Object.keys(totalDay).map(key => (
console.log(totalDay[key].total)
    ))
))
//***********

function total() {
    let total = 0;
    Object.keys(totalDay).map(key => (total += totalDay[key].total));
    
    return total;
  }
  

  return (
    <>
      

      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Somme</Table.HeaderCell>
            
            
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {Object.keys(totalDay).map(key => (
            <Table.Row key={totalDay[key]._id}>
              <Table.Cell singleLine>{totalDay[key].day}</Table.Cell>
              <Table.Cell singleLine>{totalDay[key].total}</Table.Cell>
            </Table.Row>
            
          ))}
          
        </Table.Body>
      </Table>
      <div className="totalPrix">
        Le total de l'année s'élève à  {total()}  €
      </div>
      
      
      
    </>
  );
}
