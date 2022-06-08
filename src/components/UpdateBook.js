import { Alert, IconButton } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const UpdateBook = () => {
    const id=useParams().id;
    console.log(id);
    const URL="https://shielded-springs-07902.herokuapp.com/books/"+id;
    const [inputs, setinputs] = useState({})
    const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [messageicon, setmessageicon] = useState("")
    useEffect(() => {
        const fetchHandler=async()=>{
            await axios.get(URL).then((res)=>res.data).then(data=>setinputs(data.books));
        };
        fetchHandler()
      
    }, [id])
    const handleChange=(e)=>{
        setinputs((prevstate)=>({
          ...prevstate,
          [e.target.name]:e.target.value
        }))}
      const handleSubmit=(e)=>{
        e.preventDefault();
        sendRequest();
      }; 
      const sendRequest=async()=>
  {
    await axios.put(URL,{
      name:String(inputs.name),
      description:String(inputs.description),
      author:String(inputs.author),
      image:String(inputs.image),
      favourite:Number(inputs.favourite)
    });
    if(inputs.name!=""&&inputs.description!=""&&inputs.author!=""&&inputs.image!="")
    {
      setMessage("Book Updated Successfully")
      setmessageicon("success");
      setAlert(true);
    }
    else
    {
      setmessageicon("error");
      setMessage("Failed ! Input all the Parameters")
      setAlert(true);
    }

  }
      return (
          
        <div>
         { inputs  &&  (<div class="login-box">
        <form onSubmit={handleSubmit}>
            <div class="user-box">
            <input type="text" name="name" required="" value={inputs.name} onChange={handleChange}/>
            <label>Name of the Book</label>
            </div>
            <div class="user-box">
            <input type="text" name="author" required="" value={inputs.author} onChange={handleChange}/>
            <label>Author</label>
            </div>
            <div class="user-box">
            <input type="text" name="description" required="" value={inputs.description} onChange={handleChange}/>
            <label>Description</label>
            </div>
            
            <div class="user-box">
            <input type="text" name="image" required="" value={inputs.image} onChange={handleChange}/>
            <label>Image URL</label>
            </div>
            <a href="#" onClick={handleSubmit}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Update Book
            
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
        </div>)}
        </div>
      )
    }


export default UpdateBook