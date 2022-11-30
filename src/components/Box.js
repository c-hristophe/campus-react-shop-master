import React, { useContext, useState, useEffect, useRef } from "react";
import { Table, Icon, Button, Form } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CartContext } from "../App";
import { DownloadTableExcel } from 'react-export-table-to-excel';
import '../styles/home.css'
import axios from 'axios';


export default function CartDetails() {
  
  const tableRef = useRef(null);
//***********
const [box, setBox] = useState([]);
const [total1, setTotal] = useState(0);
useEffect(() => {
  axios.get("http://localhost:8000/api/box")
  .then(res => {
    const box = res.data;
    setBox(box);
  });
}, []);

console.log(box)

//***********
function TotalDay(){
  var res = prompt("Êtes-vous sûr de vouloir valider la journée (y/n)?");
        if(res==="y"){
            let date = new Date()
            var totalDay = {
              day : date,
              articles: box,
              total : total().toFixed(2)
              }
            console.log(totalDay)
            axios.post("http://localhost:8000/api/totalDay/", totalDay)
                      
      .then(res => {
        alert ("journée validée")
        
      });
        }
        else{ alert("action suppriée")}
  
}

function total() {
  let total = 0;
  Object.keys(box).map(key => (total += box[key].price));
  
  return total;
}

  return (
    <>
      

      <table className="table" ref={tableRef}>
        <Table.Header>
          <Table.Row>
            
            <Table.HeaderCell>Référence</Table.HeaderCell>
            <Table.HeaderCell>Titre</Table.HeaderCell>
            <Table.HeaderCell textAlign="right">Prix unitaire</Table.HeaderCell>
            
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {Object.keys(box).map(key => (
            <Table.Row key={box[key]._id}>
            
              <Table.Cell singleLine>{box[key]._id}</Table.Cell>
              <Table.Cell singleLine>{box[key].title}</Table.Cell>
              <Table.Cell textAlign="right">{box[key].price} €</Table.Cell>
             
            </Table.Row>
            
          ))}
          
        </Table.Body>
      </table>
      <div className="totalPrix">
        Le total de la journée s'élève à  {total().toFixed(2)}  €
      </div>
      <div>
      <Form onSubmit={TotalDay} >
            <Button type='submit'>Valider total journée</Button>
      </Form>
      <DownloadTableExcel
                    filename="users table"
                    sheet="users"
                    currentTableRef={tableRef.current}
                >

                   <button> Export excel </button>

      </DownloadTableExcel>
      </div>
      
    </>
  );
}
