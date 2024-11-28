import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import HomePage from './landing_page/home/HomePage';
import SignupPage from './landing_page/sign_up/SignupPage';
import AboutPage from './landing_page/about/AboutPage';
import PricingPage from './landing_page/pricing/PricingPage';
import ProductPage from './landing_page/products/ProductPage';
import SupportPage from './landing_page/support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import Error from './landing_page/Error';
import Login  from './landing_page/pages/Login';
import Signup from './landing_page/pages/Signup';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path='/' element={<HomePage />}/>
    <Route path='/signup' element={<SignupPage />}/>
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path='/about' element={<AboutPage />}/>
    <Route path='/price' element={<PricingPage />}/>
    <Route path='/products' element={<ProductPage />}/>
    <Route path='/support' element={<SupportPage />}/>
    <Route path='*' element={<Error />}/>
  </Routes>
  <Footer />
  </BrowserRouter>
);