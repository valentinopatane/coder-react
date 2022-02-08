// import React from 'react';
// import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import './App.css';
// //NAVBAR
// import Navbar from './components/NavBar';
// //PAGES
// import Home from './views/home.js';
// import Shop from './views/Shop';


// function App() {
//   return (
//     <Router>
//       <Navbar/>
//       <Routes>
//         <Route path={'views/Shop.js'} element={<Shop/>}/>
//         <Route path={"*"} element={<Home/>}/>
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import './App.css';
import Navbar from './components/NavBar.js'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Valentino"></ItemListContainer>
    </>
  );
}

export default App;
