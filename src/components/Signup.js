import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import '../styles/home.css'
import{ useState } from "react";
import axios from 'axios';


class form extends React.Component {
constructor(props) {
    super(props);
    this.state = {password: '', email: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(key) {
    return function (e) {
        var state = {};
        state[key] = e.target.value;
        this.setState(state);
    }.bind(this);
}

handleSubmit(event) {
    var user= {
        
        email: this.state.email,
        password: this.state.password,
        
    
    }
    console.log(user)
      axios.post("http://localhost:8000/api/auth/signup", user)
      .then(res => {
        console.log(res);
        console.log(res.data);
        alert ("Utilisateur enregistré")
      })
    event.preventDefault();

}

render() {
        return (
<div>
<Form onSubmit={this.handleSubmit}>
    <h1>Inscription</h1>
 <Form.Group unstackable widths={2} >
<Form.Input value={this.state.email} onChange={this.handleChange('email')} label='email'  name= 'email'/>
<Form.Input value={this.state.password} onChange={this.handleChange('password')} label='password'  name= 'password' />
</Form.Group>

<Button type='submit'>Submit</Button>
</Form>
        
 </div>
)}
        }
        

export default form
