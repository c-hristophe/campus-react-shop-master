import React from 'react'
import { Button, Form, } from 'semantic-ui-react'
import '../styles/home.css'
import{ useState } from "react";
import axios from 'axios';
import { useRef } from 'react';


const modifyArticle = () =>{
    
   
    const priceImput= useRef();
    const titleImput= useRef();
    const descriptionImput= useRef();
    const stateImput= useRef();
    const imageImput= useRef();
    
    console.log(titleImput)
   
    const submit= (event) =>{
        event.preventDefault()
    
        const title = titleImput.current.value;
        const price = priceImput.current.value;
        const image = imageImput.current.value;
        const description = descriptionImput.current.value;
        const state = stateImput.current.value;
        
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
        if(res==="y"){
            axios.delete(`http://localhost:8000/api/articles/${productId}`)
      .then(res => {
        window.history.back();
        
      });
        }
        else{ alert("action suppriée")}
    }
   


        return (
            <div className='form'>
            <Form onSubmit={submit} key={books.id} >
            
            <Form.Group unstackable widths={2} >
            <label for="title">nom</label>
            <input type='texte' defaultValue={books.title} ref={titleImput} label='nom'  name= 'title' required/>
            <label for="price">prix</label>
            <input defaultValue={books.price} ref={priceImput} label='Prix'  name= 'price' />
          
            </Form.Group>
            <Form.Group widths={2}>
            <label for="description">description</label>
            <input defaultValue={books.description} ref={descriptionImput} label='description' name='description'/>
            <label for="image">image</label>
            <input defaultValue={books.image} ref={imageImput} label='image'  name= 'image' />
            
            </Form.Group>
            <Form.Group widths={2}>
            <label for="state">état</label>
            <input defaultValue={books.state} ref={stateImput} label='état' name='state'/>
            
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
        
    export default modifyArticle
