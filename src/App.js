import React from 'react';
import { HomePage } from './pages/HomePage';
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ProductPage } from './pages/ProductPage';
import { NavBar } from './components/NavBar';


const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductPage />} />
      </Routes>
      <Footer />
    </Router>
      
  )
};

export default App

