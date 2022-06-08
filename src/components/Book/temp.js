import React, { useEffect, useState } from 'react'
import axios from "axios"
import Bookfav from './Book'
const URL="https://shielded-springs-07902.herokuapp.com/books"


const fetchHandler= async()=>
{
   return await axios.get(URL).then((res)=>res.data)
}
const Books = () => {
    const [books, setdata] = useState();
    useEffect(() => {
      fetchHandler().then(data=>setdata(data.books))
    }, [] );
    console.log(books);
  return (
    <ul class="cards">
       {books && books.map((book,i)=>(
         <Bookfav book={book}/>
       ))}
    </ul>
  )
}

export default Books