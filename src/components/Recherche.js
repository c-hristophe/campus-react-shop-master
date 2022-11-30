import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from "axios";  
import { Button, Form, Image, } from 'semantic-ui-react'


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
    
  
    axios.get("http://localhost:8000/api/articles")
    
    .then((res) => {
      
      for (var i = 0; i < res.data.length; i++) {
        myOptions.push(res.data[i].title)
        myOptions2.push(res.data[i].price)
        myOptions3.push(res.data[i].description)
        myOptions4.push(res.data[i].image)
        myOptions5.push(res.data[i].state)
        myOptions6.push(res.data[i]._id)
        myOptions7.push(res.data[i]._quantity)
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

function deleteFromStock(){
  
  axios.delete(`http://localhost:8000/api/articles/${myOptions6[indexof]}`)

  
  // code pour ajouter article dans la caisse box
  
 
    const box = {
      title: myOptions[indexof],
      price: myOptions2[indexof],
      id : myOptions6[indexof],

    }
    console.log(box)
    axios.post("http://localhost:8000/api/box/", box)
    
    alert('Article vendu ! ')

    

  /************************ */
}


 console.log(data)
 const [value, setValue] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');
  const [indexof, setInputValueIndex] = React.useState('');

  return (
    
    <div style={{ marginLeft: '10px', marginTop: '60px' }}>
      <Form>
      <h3>Recherche article</h3>
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
            label="entrer un article"
          />
     
        )}
      />
      
      </Form>

             <Form>
                
            <Form.Group  widths={4} >
              <Form.Input value={` ${myOptions6[indexof]}`} label='référence'  id= 'reference'/>
              <Form.Input value={` ${myOptions[indexof]}`} label='nom'  id= 'title'/>
              <Form.Input value={` ${myOptions2[indexof]}`}  label='Prix'  id= 'price' />
              <Form.Input value={` ${myOptions5[indexof]}`}  label='état' id='state'/>
            </Form.Group>
            <Form.Group widths={2}>
              <Image className='thumb--img' src={` ${myOptions4[indexof]}`}  />
              <Form.TextArea value={` ${myOptions3[indexof]}`}  row= '50' label='description' id='description' break-word />
            </Form.Group>
            <Button type='submit' onClick={deleteFromStock}>Encaisser</Button>
            </Form>
                    
            
    </div>
    
        );
      }

  
export default App