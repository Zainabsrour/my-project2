import logo from './logo.svg';
import './App.css';
 import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
 import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from './Components/Footer';
import { useState } from 'react';
import HeroSection from './Components/HeroSection';
import Home from './Pages/Home';
import About from './Pages/About';
import Cars from './Pages/Cars';
import Contact from './Pages/Contact';
import Mercedes from './Pages/Mercedes';
import Bmw from "./Pages/Bmw";
import CarDetails from './Pages/CarDetails';
import Signup from './Pages/Signup';
import Login from './Pages/Login';

function App() {
    

  return (
   <div style={{backgroundColor:"white"}}>
   <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace/>}/>
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/cars" element={<Cars/>} />
         <Route path="/mercedescars" element={<Mercedes/>} />
          <Route path="/bmwcars" element={<Bmw/>} />
           <Route path="/bmw/:id" element={<CarDetails />} /> 
           <Route path="/login" element={<Login/>}/>
             <Route path="/signup" element={<Signup/>}/>
{/* dayamic page lkel syra */}
      </Routes>
       <Footer/>
     
    </BrowserRouter>
    </div>
);
}

export default App;
