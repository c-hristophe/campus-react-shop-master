import React, { useState } from "react";
import { Input, Button, Form, TextArea } from 'semantic-ui-react'
import axios from 'axios'
import { useRef, useEffect } from 'react';
import '../styles/home.css'



//***************** */
  const Send = () => {
    
    
    const nameImput= useRef();
    const emailImput= useRef();;
    const addressImput= useRef();
    const townImput= useRef();
    const phoneImput = useRef();
    const articleImput = useRef();
    
    
   
    const submit= (event) =>{
        event.preventDefault()
    
        const name = nameImput.current.value;
        const email = emailImput.current.value;
        const address = addressImput.current.value;
        const town = townImput.current.value;
        const phone = phoneImput.current.value;
        const article = articleImput.current.value;
    

       

    const contact= {
     
      name,
      email, 
      address,
      town,
      phone,
      article
     
    }

    console.log(contact)

    axios.post("http://localhost:8000/api/address/", contact)
  .then(res => {
    console.log(res);
    console.log(res.data);
    alert ("Coodonnées envoyé")
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
      <Form.Group unstackable widths={2} >
        <label for="title">adresse</label>
        <input  type="text" ref={addressImput} placeholder="Adresse" name="address" required/>
        <label for="title">Ville</label>
        <input type="text" ref={townImput} placeholder="Ville" name="town" required />
        <label for="title">Téléphone</label>
        <input type="text" ref={phoneImput} placeholder="Téléphone" name="phone" required />
        <label for="title">Articles</label>
        <input type="text" ref={articleImput} placeholder="Articles achetés" name="article"  />
      </Form.Group>
      <div className="rowContact">
        <Button type="submit"> Envoyer </Button>
      </div>
    </Form>
   

  );
};

export default Send;
