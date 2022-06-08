import {IconButton } from '@mui/material';
import axios from 'axios';
import React from 'react'
import { Link} from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import {useNavigate} from "react-router-dom"
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#d50000',
    },
  },
});
const Book = (props) => {
    
    const {_id,name,description,image,author,favourite}=props.book;
    
    const URL="https://shielded-springs-07902.herokuapp.com/books/"+_id;
    const updte="/books/"+_id;
    const history=useNavigate();
    console.log(URL);
    const deleteHandler=async()=>{
      await axios.delete(URL)
      .then((res)=>res.data)
      .then(()=>history("/books"))
    }
    const sendRequest=async()=>
    {
      await axios.put(URL,{
        name:String(name),
        description:String(description),
        author:String(author),
        image:String(image),
        favourite:Number(1-favourite)
      })
      .then(()=>history("/books"))
    }
    const favouriteHandler=()=>{

       sendRequest();
     
    } 
  return (
    
   
    
    
    <li>
      <a class="card">
        <img src={image} class="card__image" alt="" />
        <div class="card__overlay">
          <div class="card__header">
            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
            
            <div class="card__header-text">
              <h3 class="card__title">{name}</h3>
              <span class="card__status">-By {author}</span>
            </div>          
          </div>
          <p class="card__description">{description}</p>
          <p class="card__descriptions">
          
            <IconButton aria-label="delete" size="large" onClick={deleteHandler} component={Link}  to={"/temp"}>
        <DeleteIcon fontSize="small" />
      </IconButton>
   
      <span>‎‎ </span>
      <span>‎‎ </span>
      <span>‎‎ </span>
      <ThemeProvider theme={theme}>
            <IconButton aria-label="favourite" size="medium" onClick={favouriteHandler} component={Link}  to={"/temp"} >
        {favourite?<FavoriteIcon fontSize="small" color="primary"/>:<FavoriteIcon fontSize="small"/>}
      </IconButton>
      
    </ThemeProvider>
      <span>‎‎ </span>
      <span>‎‎ </span>
      <span>‎‎ </span>
            <IconButton aria-label="update" size="large" component={Link} to={updte}>
        <ReplayOutlinedIcon fontSize="small" />
      </IconButton>

            
          </p>
          
        </div>
      </a>
    </li>    
  
  
  
  )
}

export default Book