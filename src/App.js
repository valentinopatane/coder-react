import React from 'react';
import {Route, Routes, BrowserRouter as Router } from "react-router-dom";
import './App.css';
//NAVBAR
import Navbar from './components/NavBar';
//PAGES
import Home from './views/home.js';
import Shop from './views/Shop';
import ItemDetailContainer from './views/ItemDetailContainer';
import CategoryList from './views/CategoryList';
import Error404 from './views/Error404';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path={'shop'} element={<Shop/>}/>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path={'/shop/item/:id'} element={<ItemDetailContainer/>}/>
        <Route exact path={'/category/:id'} element={<CategoryList/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
    </Router>
  );
}

export default App;

