import React from 'react'
import { Paper ,Switch} from '@mui/material'
import "../styles/navbar.css"
import { Link } from 'react-router-dom'


const Navbar = ({mode,setMode}) => {
  return (
    <Paper>
       <div className="navbar">
        <div className="logo">
               
        </div>

        <div className="nav_bar_links">
                 <Link to={"/"} style={{textDecoration:'none', color:mode?'#ffffff':"black"}}>Home</Link>
                 <Link to={"/courses"} style={{textDecoration:'none', color:mode?'#ffffff':"black"}}> Course</Link>
                 <Link to={"progress"} style={{textDecoration:'none', color:mode?'#ffffff':"black"}}>Progress</Link>
              <Switch onClick={()=>{
                   setMode(!mode);
                 }}></Switch>
       
        </div>
       
        </div>            
    </Paper>
  )
}

export default Navbar