
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.js";

import BookDetail from "./pages/BookDetail.js";
//import Menu from "./components/Menu.js";
import Header from "./components/Header.js";
function App() {
 
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/"element={<Home />} />
        <Route path="/home"element={<Home />} />
        <Route path="/:isbn"element={<BookDetail />} />

       
     </Routes>
   </Router>
  );
}

export default App;
