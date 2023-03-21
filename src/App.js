import React, { useState } from 'react';
import './App.css';
import {Switch,Paper} from  "@mui/material"
import { createTheme,ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRoute,Routes, Route, BrowserRouter} from 'react-router-dom';

//import components
import Navbar from './component/layout/Navbar';
import Home from './component/layout/Home';
import Progress from './component/layout/Progress';
import CourseTrack from './component/courses/CourseTrack';
import Chapter from './component/courses/Chapter';
import Courses from './component/courses/Courses';

function App() {
  const[mode,setMode]=useState(false);

  const theme = createTheme({
    palette: {
      mode: mode ?"dark":"light",
      color: mode?"black":"white",
    },
  });

  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
       <div className="App">
     <Navbar mode={mode} setMode={setMode}/>
     <Routes>
     <Route exact path="/" element={<Home/>}/>
     <Route exact path="/progress" element={<Progress/>}/>
     <Route exact path="/coursetrack" element={<CourseTrack/>}/>
     <Route exact path='/chapters/:id'  element={<Chapter/>}/>
     <Route exact path='/courses'  element={<Courses/>}/>
     </Routes>
    </div>
   
</ThemeProvider>
</BrowserRouter>
   
  );
}

export default App;
