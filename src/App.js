import React from 'react';
import {Route, Routes, BrowserRouter as Router } from "react-router-dom";
import './App.css';
//NAVBAR
import Navbar from './components/NavBar';
//PAGES
import Home from './views/home.js';
import Shop from './views/Shop';
import ItemDetailContainer from './views/ItemDetailContainer';
import CategoryList from './views/Categories';
import Cart from './views/Cart'
import Error404 from './views/Error404';
//CONTEXT
import {ItemsProvider} from './components/context/ItemsContext';

function App() {
  return (
    <ItemsProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path={'shop'} element={<Shop/>}/>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path={'/shop/item/:id'} element={<ItemDetailContainer/>}/>
          <Route exact path={'/category/:id'} element={<CategoryList/>}/>
          <Route exact path='/cart' element={<Cart/>}/> 
          <Route path='*' element={<Error404/>}/>
        </Routes>
      </Router>
    </ItemsProvider>
  );
}

export default App;

