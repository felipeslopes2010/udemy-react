import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/home'
import ProductsPage from './pages/products'
import AboutPage from './pages/about'
import { Navbar } from './components/navbar'

import './App.css'

function App() {
  return (
    <div>
      <h1>Context</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export{ App }
