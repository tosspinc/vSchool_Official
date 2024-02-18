import React from 'react'
import './App.css'
import Header from './components/Header.jsx'
import MainContent from './components/MainContent.jsx'
import Footer from './components/Footer.jsx'


function App() {
  return (
    <>
      <div className='container'>
        <Header />
        <h1>Tosspi - The One Stop Shopping Place Inc. My project page.</h1>
        <MainContent />
        <Footer />
      </div>
    </>
  )
}

export default App
