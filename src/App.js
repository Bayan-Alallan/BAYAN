import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Success from './success';
import Failure from './Failure';
import './App2.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/success" element={<Success />} />
          <Route path="/failure" element={<Failure />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



{/*function App() {
  //const name="Bayan Mohammed Alallan";
  return (
   <div className="App">
    
    
      {/*<Posts/>
     <Navbar/>
    {<About/>}
    {<Home/>}*/}
  


      {/*<h1>{name}</h1> <br/>*/}
  

 //   </div>
  //);
//}

