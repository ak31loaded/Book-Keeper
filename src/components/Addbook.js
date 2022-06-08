
import { Alert, Collapse, IconButton } from '@mui/material';
import axios from 'axios'
import React, { useState } from 'react'

const Addbook = () => {
  const [inputs, setInputs] = useState({
    name: "",
    author: "",
    image: "",
    description: "",
    favourite: 0
  }
  );
  const URL="https://shielded-springs-07902.herokuapp.com/books";
  const sendRequest=async()=>
  {
    await axios.post(URL,{
      name:String(inputs.name),
      description:String(inputs.description),
      author:String(inputs.author),
      image:String(inputs.image),
      favourite:Number(inputs.favourite)
    });
  }

  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [messageicon, setmessageicon] = useState("")
  const handleChange=(e)=>{
    setInputs((prevstate)=>({
      ...prevstate,
      [e.target.name]:e.target.value
    }))
  }
  let valid=true;
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(inputs);
    sendRequest();
    if(inputs.name!=""&&inputs.description!=""&&inputs.author!=""&&inputs.image!="")
    {
      setMessage("Book Added Successfully")
      setmessageicon("success");
      setAlert(true);
    }
    else
    {
      setmessageicon("error");
      setMessage("Failed ! Input all the Parameters")
      setAlert(true);
    }

  };


  return (
    <div>
      <br/>
      <div class="login-box">
  <form onSubmit={handleSubmit}>
    <div class="user-box">
      <input type="text" name="name" required="" value={inputs.name} onChange={handleChange} autoComplete="off"/>
      <label>Name of the Book</label>
    </div>
    <div class="user-box">
      <input type="text" name="author" required="" value={inputs.author} onChange={handleChange} autoComplete="off"/>
      <label>Author</label>
    </div>
    
    <div class="user-box">
      <input type="text" name="description" required="" value={inputs.description} onChange={handleChange} autoComplete="off"/>
      <label>Description</label>
    </div>
    
    <div class="user-box">
      <input type="text" name="image" required="" value={inputs.image} onChange={handleChange} autoComplete="off"/>
      <label>Image URL</label>
    </div>
    <a href="#" onClick={handleSubmit}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Add Book
      
    </a>
  </form>
  
  {(() => {
            if (alert) {
              return (
                  <Alert severity={messageicon}
                    action={
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                         
                          setAlert(false);
                        }}
                      >✖ 
                      </IconButton>
                    }
                  >
                    {message}
                  
                    
                  </Alert>
                
              );
            }

            return null;
          })()}
</div>
<br/>
    </div>
  )
}

export default Addbook