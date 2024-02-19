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
        <MainContent />
        <Footer />
      </div>
    </>
  )
}

export default App
