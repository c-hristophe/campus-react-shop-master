import React, { useState } from "react";
import { Input, Button, Form, TextArea } from 'semantic-ui-react'
import axios from 'axios'
import { useRef } from 'react';




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

    axios.post("http://localhost:8000/api/contact", contact)
  .then(res => {
    console.log(res);
    console.log(res.data);
    alert ("Message envoyé")
  })
  }

//***************** */
  

  return (
    <Form>
     
    <form
      action={Send}      
     
      method="POST"
      target="_blank"
    >
      <div>
        <Input type="text" ref={nameImput} placeholder="Nom" name="name" required />
      </div>
      <div>
        <Input type="email" ref={emailImput} placeholder="Email" name="email" required />
      </div>
      <div>
        <TextArea ref={messageImput} placeholder="votre message" name="message" required />
      </div>
      <div>
        <Button type="submit"> Envoyer </Button>
      </div>
    </form>
   
   </Form>
  );
};

export default Send;
