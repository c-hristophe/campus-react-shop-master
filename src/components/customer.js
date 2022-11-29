import React, { useState } from "react";
import { Input, Button, Form, TextArea } from 'semantic-ui-react'
import axios from 'axios'
import { useRef } from 'react';
import '../styles/home.css'



//***************** */
  const Customer = () => {
    
    
    const nameImput= useRef();
    const emailImput= useRef();
    const messageImput= useRef();
    
    
    
   
    const submit= (event) =>{
        event.preventDefault()
    
        const name = nameImput.current.value;
        const email = emailImput.current.value;
        const comment = messageImput.current.value;
        const article= ["0"];
        
        
    const contact= {
     
      name,
      email, 
      comment, 
      article
    
     
    }

    console.log(contact)

    axios.post("http://localhost:8000/api/customer/", contact)
  .then(res => {
    console.log(res);
    console.log(res.data);
    alert ("Client créé")
  })
  }

//***************** */
  

  return (
    
     
    <Form
      action={Customer}      
      onSubmit={submit}
      method="POST"
      target="_blank"
      >
     <Form.Group unstackable widths={2} >
        <label for="title">nom</label>
        <input  type="text" ref={nameImput} placeholder="Nom" name="name" required/>
        <label for="title">email</label>
        <input type="email" ref={emailImput} placeholder="Email" name="email" required />
      </Form.Group>
      <Form.Group unstackable widths={1} >
      <label for="title">commentaire</label>
        <input ref={messageImput} placeholder="votre commentaire" name="message"  />
      </Form.Group>
      
      <div className="rowContact">
        <Button type="submit"> Enregistrer </Button>
      </div>
    </Form>
   

  );
};

export default Customer;
