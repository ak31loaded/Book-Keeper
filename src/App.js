
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import About from './components/About';
import Addbook from './components/Addbook';
import Books from './components/Book/Books';
import Favourite from './components/Favourite';
import Header from './components/Header';
import UpdateBook from './components/UpdateBook';

function App() {
  return (
    <React.Fragment>
      <header>
        <Header/>
      </header>
      <body>
      <Routes>
        <Route path='/' element={<Books />} exact/>
        <Route path='/about' element={<About />} exact />
        <Route path='/books' element={<Books />} exact/>
        <Route path='/favourite' element={<Favourite />} exact/>
        <Route path='/add' element={<Addbook />} exact/>
        <Route path='/books/:id' element={<UpdateBook />} exact/>
      </Routes>
      </body>
    </React.Fragment>
  );
}

export default App;
