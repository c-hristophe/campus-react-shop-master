import React from 'react'
import { Button, Form, } from 'semantic-ui-react'
import '../styles/home.css'
import{ useState } from "react";
import axios from 'axios';
import { useRef } from 'react';



export default function SingleProduct (data) {
    
   
    const priceImput= useRef(priceImput);
    const titleImput= useRef(titleImput);
    const descriptionImput= useRef(descriptionImput);
    const stateImput= useRef(stateImput);
    const imageImput= useRef(imageImput);
    
    console.log(titleImput)
   
    const submit= (event) =>{
        event.preventDefault()
    
        const title = titleImput.value;
        const price = priceImput;
        const image = imageImput;
        const description = descriptionImput;
        const state = stateImput;
        
    const article= {
     
      title,
      price,
      image,
      description,
      state
     
     
      
    }
console.log(article)
    

    axios.put(`http://localhost:8000/api/articles/${productId}`, article)
      .then(res => {
        console.log(res);
        console.log(res.data);
        alert ("produit enregistré")
      })
    }
    
    
  const productId = localStorage.getItem('obj')
  
    axios.get(`http://localhost:8000/api/articles/${productId}`)
    .then(res => {
      const books = res.data;
     
     setBooks(books)
    });
    const [books, setBooks] = useState([]) 
    

    function DeleteProduct (data) {

      const productId = localStorage.getItem('obj')
      console.log(productId)
    
        var res = prompt("Êtes-vous sûr de vouloir supprimer la fiche (y/n)?");
        if(res){
            axios.delete(`http://localhost:8000/api/articles/${productId}`)
      .then(res => {
        window.history.back();
        
      });
        }
    }
   


        return (
            <div className='form'>
            <Form onSubmit={submit} key={books.id} >
            
            <Form.Group unstackable widths={2} >
            <Form.Input type='texte' defaultValue={books.title} ref={titleImput} label='nom'  name= 'title' required/>
          
            <Form.Input  defaultValue={books.price} ref={priceImput} label='Prix'  name= 'price' />
          
            </Form.Group>
            <Form.Group widths={2}>
            <Form.Input defaultValue={books.description} ref={descriptionImput} label='description' name='description'/>
            
            <Form.Input defaultValue={books.image} ref={imageImput} label='image'  name= 'image' />
            
            </Form.Group>
            <Form.Group widths={2}>
            <Form.Input defaultValue={books.state} ref={stateImput} label='état' name='state'/>
            
            </Form.Group>
            <div className='formButton'>
            <Form.Group unstackable widths={2} >
            <Button type='submit' >Soumettre</Button>
            
            <Button content='Retour' 
            primary
            name="retour"
            size="big"
            onClick={() =>  window.history.back()}
            style={{ cursor: "pointer" }}
          />
            </Form.Group>
            </div>  
            </Form>
            
            <Form onSubmit={DeleteProduct} >
            <Button type='submit'>Supprimer la fiche</Button>
              </Form>
                
                        
            </div>
)
        }
        
    
