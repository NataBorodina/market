import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageIndex from './Components/PageIndex/PageIndex';
import PageProduct from './Components/PageProduct/PageProduct';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageIndex />} />
        <Route path="/product" element={<PageProduct />} />
        <Route path = "*" element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
