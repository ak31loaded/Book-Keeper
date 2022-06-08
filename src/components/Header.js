import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
const Header = () => {
    const [Value, setValue] = useState(0);
  return (
    <header>
    <div>

        <AppBar sx={{backgroundColor: "#3c4d63"}} position="sticky">
        <Toolbar>
        <Typography>Book Keeper</Typography>
        <Tabs sx={{ml:"auto"}} textColor='inherit' indicatorColor='primary' value={Value} onChange={(e,val)=>setValue(val)}>

            <Tab LinkComponent={NavLink} to='/' label="All Books"/>
            <Tab LinkComponent={NavLink} to='/favourite' label="Favourites"/>
            <Tab LinkComponent={NavLink} to='/add' label="Add Books"/>
            <Tab LinkComponent={NavLink} to='/about' label="About Us"/>
        </Tabs>
        </Toolbar>
        </AppBar>
    </div>
    </header>
  )
}

export default Header