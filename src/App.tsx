import React from 'react'
import Navbar from './sections/Navbar'
import Footer from './sections/Footer'
import Background from './components/Background'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Search from './pages/Search'
import About from './pages/About'
import Mylist from './pages/Mylist'
import Pokemon from './pages/Pokemon'
import Compare from './pages/Compare'

const App = () => {
  return (
    <div className='main-container'>
      <Background />
      <BrowserRouter>
        <div className='app'>
          <Navbar />
          <Routes>
            <Route path='/search' element={<Search />} />
            <Route path='/about' element={<About />} />
            <Route path='/mylist' element={<Mylist />} />
            <Route path='/pokemon/:id' element={<Pokemon />} />
            <Route path='/compare' element={<Compare />} />
            <Route path='*' element={<Navigate to={"/pokemon/1"} />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App