import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ProductDetail from '../src/Components/ProductDetails';
import './App.css';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    
    <BrowserRouter>
     <Toaster/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App