import './App.css'

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import { Navbar } from './components/Navbar'

import { Home } from './pages/Home'
import { About } from './pages/About'
import { Product } from './pages/Product'
import { Info } from './pages/Info'
import { NotFound } from './pages/NotFound'
import { SearchForm } from './components/SearchForm'
import { Search } from './pages/Search'

function App() {
  return (
    <div>
      <h1>React Router</h1>
      <BrowserRouter>
        {/* Aula 2 - Links com React Router */}
        <Navbar />
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Aula 4 - Rota Dinâmica */}
          <Route path="/products/:id" element={<Product />}>
          {/* Aula 6 - Nested Routes */}
            <Route path="info" element={<Info />} />
          </Route>
          {/* Aula 9 - Search */}
          <Route path="/search" element={<Search />} />
          {/* Aula 10 - Redirecionamento de rota */}
          <Route path="/company" element={<Navigate to="/about" />} />
          {/* Aula 7 - Page not found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export { App }
