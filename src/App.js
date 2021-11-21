import { useEffect, useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import { handleApi } from './API/handleAPI';
import MainPage from './Components/MainPage';
import Projects from './Components/Projects';
function App() {
  return (
    <Routes>
        <Route path="/" exact element={<MainPage/>}/>
        <Route path="/Projects" exact element ={<Projects />}/>
        {/* <Route path="/Skills" exact element ={<Skills/>}/> */}
        {/* <Route path="/Contact" exact element ={<Contact/>}/> */}
        {/* <Route path="/About" exact component={About}/>
        <Route path="/Skills" exact component={Skills}/> */}
    </Routes>
  );
}

export default App;
