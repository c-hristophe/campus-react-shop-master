import React from "react";
import {  Button, Form,  } from 'semantic-ui-react'
import axios from 'axios'
import { useRef } from 'react';
import '../styles/home.css'



//***************** */
  const Send = () => {
    
    
    const nameImput= useRef();
    const emailImput= useRef();
    const messageImput= useRef();
    
    
   
    const submit= (event) =>{
        event.preventDefault()
    
        const name = nameImput.current.value;
        const email = emailImput.current.value;
        const message = messageImput.current.value;
        
        
    const contact= {
     
      name,
      email, 
      message
     
    }

    console.log(contact)

    axios.post("http://localhost:8000/api/contact/", contact)
  .then(res => {
    console.log(res);
    console.log(res.data);
    alert ("Message envoyé")
  })
  }

//***************** */
  

  return (
    
     
    <Form
      action={Send}      
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
      <label for="title">message</label>
        <input ref={messageImput} placeholder="votre message" name="message" required />
      </Form.Group>
      <div className="rowContact">
        <Button type="submit"> Envoyer </Button>
      </div>
    </Form>
   

  );
};

export default Send;
