import { useState } from 'react'
import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Images } from './components/Images'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './components/Home'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { NavBar } from './components/NavBar'
import { Products } from './components/Products'
import { Product } from './components/Product'
import { Faq } from './components/Faq'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from './components/Login'


const queryClient = new QueryClient

function App() {
const [isLoggedIn, setIsLoggedIn]= useState(false)
const [loggedUser, setLoggedUSer]= useState("")


  return (
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> 
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='images' element={<Images/>} />
        <Route path='products' element={<Products/>} />
        <Route path='/products/:id' element={<Product/>} />
        <Route path='faq' element={isLoggedIn ? <Faq/> : <Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path='login' element={<Login setIsLoggedIn={setIsLoggedIn}/>} />

      </Routes>
    </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
