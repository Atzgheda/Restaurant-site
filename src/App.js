import React from "react";
import Hero from "./components/Hero";
import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from "./globalStyles";
import Products from "./components/Products";
import {productData, productDataTwo} from './components/Products/Data'
import Feature from "./components/Feature";
import Footer from "./components/Footer";
 
function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Products heading='Choose your favorite' data={productData}/>
      <Feature/>
      <Products heading='Sweet Treats for You' data={productDataTwo}/>
      <Footer/>
    </Router>
  );
}

export default App;
