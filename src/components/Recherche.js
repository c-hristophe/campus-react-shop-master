import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from "axios";  
import { Button, Form } from 'semantic-ui-react'
import { MyLocationRounded } from '@material-ui/icons';

const App = () => {
  
  const [myOptions, setMyOptions,] = useState([])
  const [data, setMyData] = useState([]);
  const [dataTitle, setMyDataTitle] = useState([]);

  const getDataFromAPI = () => {
    
  
    axios.get("http://localhost:8000/api/articles")
    
    .then((res) => {
      
      for (var i = 0; i < res.data.length; i++) {
        myOptions.push(res.data[i].title)
       
      }
      setMyOptions(myOptions)
      const data = res.data;
      setMyData(data);
    })
    
    
  }
 console.log(data)

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
        //***************** */
        // onInputChange={(event, newInputValue) => {
        //   setInputValue(newInputValue);
        // }}
        //***************** */
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
                
            <Form.Group unstackable widths={2} >
            <Form.Input value={data.title} label='nom'  name= 'title'/>
            <Form.Input value={data.price} label='Prix'  name= 'price' />
            </Form.Group>
            <Form.Group widths={2}>
            <Form.Input value={data.description}  label='description' name='description'/>
            <Form.Input value={data.image}  label='image'  name= 'image' />
            </Form.Group>
            <Form.Group widths={2}>
            <Form.Input value={data.state}  label='état' name='state'/>
            
            </Form.Group>
            
            <Button type='submit'>Submit</Button>
            </Form>
                    
            
    </div>
    
        );
      }

  
export default App