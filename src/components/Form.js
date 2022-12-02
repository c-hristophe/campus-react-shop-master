import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import '../styles/home.css'
import axios from 'axios';





class form extends React.Component {
constructor(props) {
    super(props);
    this.state = {id: '', title: '', price: '', description: '', image: '', state: ''};
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
    
    
    var article = {
        
        id: this.state.id,
        title: this.state.title,
        price: this.state.price,
        description: this.state.description,
        image: this.state.image,
        state: this.state.state,
    
    }
    console.log(article)
      axios.post("http://localhost:8000/api/articles", article)
      .then(res => {
        console.log(res);
        console.log(res.data);
        alert ("produit enregistré")
      })
    event.preventDefault();

}

render() {
        return (
           <>
            <Form onSubmit={this.handleSubmit}>
                
            <Form.Group unstackable widths={2} >
            <Form.Input value={this.state.title} onChange={this.handleChange('title')} label='nom'  name= 'title'/>
            <Form.Input value={this.state.price} onChange={this.handleChange('price')} label='Prix'  name= 'price' />
            </Form.Group>
            <Form.Group widths={2}>
            <Form.Input value={this.state.description} onChange={this.handleChange('description')} label='description' name='description'/>
            <Form.Input value={this.state.image} onChange={this.handleChange('image')} label='image'  name= 'image' />
            </Form.Group>
            <Form.Group widths={2}>
            <Form.Input value={this.state.state} onChange={this.handleChange('state')} label='état' name='state'/>
            
            </Form.Group>
            <Form.Group widths={2}>
            <Button type='submit'>Submit</Button>
            </Form.Group>
            </Form>
                    
           </>
)}
        }
        

export default form
