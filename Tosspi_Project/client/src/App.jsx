import React from 'react'
import './App.css'
import NavigationBar from './components/NavigationBar.jsx'
import MainContent from './components/MainContent.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <div className='container'>
        <NavigationBar />
        {/* <MainContent />
        <Footer /> */}
      </div>
    </>
  )
}
