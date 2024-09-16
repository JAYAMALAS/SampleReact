import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/home";
import AboutUs from "./components/About/AboutUs";
import Footer from "./components/Footer/Footer";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function App() {
  return (
    <>
     
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>

    </>
  );

}


export default App;