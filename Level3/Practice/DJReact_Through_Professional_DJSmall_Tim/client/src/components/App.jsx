import React from 'react'
import Header from './components/Header'
import Squares from './Squares'
import Buttons from './components/Buttons'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  
  return (
    <div className='app-container'>
      <Header />
      <div className='dj-container'>
        <Squares squareColors={squareColors} />
        <Buttons />
      </div>
      <Footer />
    </div>
  );
}
