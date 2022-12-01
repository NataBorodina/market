import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageIndex from './Pages/PageIndex/PageIndex';
import PageProduct from './Pages/PageProduct/PageProduct';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
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
