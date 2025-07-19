import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { AuthProvider } from './contexts/auth'
import { onAuthStateChanged } from 'firebase/auth'

import { useState, useEffect } from 'react'
import { useAuth } from './hooks/use-auth'

import HomePage from './pages/home'
import DashboardPage from './pages/dashboard'
import NewPostPage from './pages/new-post'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import AboutPage from './pages/about'


function App() {
  const [user, setUser] = useState(undefined)
  const { auth } = useAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    })
  }, [auth])

  const loadingUser = user === undefined

  if(loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <AuthProvider value={{user}}>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="posts/new" element={user ? <NewPostPage /> : <Navigate to="/login" />} />
            <Route path="dashboard" element={user? <DashboardPage /> : <Navigate to="/login" />} />
            <Route path="login" element={!user ? <LoginPage /> : <Navigate to="/" />} />
            <Route path="register" element={!user ? <RegisterPage /> : <Navigate to="/" />} />
            <Route path="about" element={<AboutPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  )
}

export { App }
