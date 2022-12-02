import React, { useState, useRef } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from "axios";  
import { Button, Form,  } from 'semantic-ui-react'


const App = () => {
  
  const [myOptions, setMyOptions,] = useState([])
  const [myOptions2, setMyOptions2,] = useState([])
  const [myOptions3, setMyOptions3,] = useState([])
  const [myOptions4, setMyOptions4,] = useState([])
  const [myOptions5, setMyOptions5,] = useState([])
  const [myOptions6, setMyOptions6,] = useState([])
  const [myOptions7, setMyOptions7,] = useState([])
  const [data, setMyData] = useState([]);
  

  const getDataFromAPI = () => {
    
  
    axios.get("http://localhost:8000/api/address")
    
    .then((res) => {
      
      for (var i = 0; i < res.data.length; i++) {
        myOptions.push(res.data[i].name)
        myOptions2.push(res.data[i].email)
        myOptions3.push(res.data[i].address)
        myOptions4.push(res.data[i].town)
        myOptions5.push(res.data[i].phone)
        myOptions6.push(res.data[i].article)
        myOptions7.push(res.data[i]._id)
        
      }
      setMyOptions(myOptions)
      setMyOptions2(myOptions2)
      setMyOptions3(myOptions3)
      setMyOptions4(myOptions4)
      setMyOptions5(myOptions5)
      setMyOptions6(myOptions6)
      setMyOptions7(myOptions7)
      
      const data = res.data;
      setMyData(data);
    })
    
    
  }
//  *******************

const articleImput= useRef();


const submit= (event) =>{
    event.preventDefault()

    
    var article = myOptions6[indexof].push(articleImput.current.value);
    
    console.log (articleImput.current.value)
    console.log (myOptions6[indexof])
    console.log (article)

const customer= {
 
  name: myOptions[indexof],
  email : myOptions2[indexof],
  address: myOptions3[indexof],
  town : myOptions4[indexof],
  phone: myOptions5[indexof],
  article : myOptions6[indexof] ,

}


axios.put(`http://localhost:8000/api/address/${myOptions7[indexof]}`, customer)
  .then(res => {
    console.log(res);
    console.log(res.data);
    alert ("Mis à jour !")
  })
}
const [options, setOptions,] = useState([])


//  *******************
 console.log(data)
 const [value, setValue] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');
  const [indexof, setInputValueIndex] = React.useState('');

  return (
    
    <div style={{ marginLeft: '10px', marginTop: '60px' }}>
      <Form>
      <h3>Recherche client</h3>
      <Autocomplete
        style={{ width: 500 }}
        freeSolo
        autoComplete
        autoHighlight
        options={myOptions}
        
        
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
          var index= newInputValue
          var indexof =(myOptions.indexOf(index));
          setInputValueIndex(indexof);
          
        }}
      
        renderInput={(params) => (
          
          <TextField {...params}
            onChange={getDataFromAPI}
            variant="outlined"
            label="entrer un nom"
          />
     
        )}
      />
      
      </Form>

             <Form>
                
            <Form.Group  widths={4} >
              
              <Form.Input value={` ${myOptions[indexof]}`} label='nom'  id= 'title'/>
              <Form.Input value={` ${myOptions2[indexof]}`}  label='email'  id= 'email' />
              <Form.Input value={` ${myOptions3[indexof]}`}  label='adresse' id='address' />
              <Form.Input value={` ${myOptions4[indexof]}`}  label='ville'  id= 'town' />
              <Form.Input value={` ${myOptions5[indexof]}`}  label='téléphone'  id= 'phone' />
             
            </Form.Group>
            <Form.Group widths={3}>
            
              
              <Form.TextArea value={` ${myOptions6[indexof]}`}  row= '50' label='articles déja achetés' id='articles' break-word />
              <input  label='description' ref={articleImput} placeHolder = 'entrer article' name= 'article' />
            </Form.Group>
            
            </Form>
            <Form onSubmit={submit} >
            <Button type='submit'>Mettre à jour</Button>
              </Form>       
            
    </div>
    
        );
      }

  
export default App