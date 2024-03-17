import React from 'react'
import Header from './components/Header'
import Buttons from './components/Buttons'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  
  return (
    <div className='app-container'>
      <Header />
      <div className='dj-container'>
        <Buttons />
      </div>
      <Footer />
    </div>
  );
}
