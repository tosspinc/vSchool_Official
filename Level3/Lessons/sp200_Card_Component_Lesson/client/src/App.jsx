import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Cards'
import data from './data'
import './App.css'

export default function App() {
  // <Hero />
  const cards = data.map(item => {
    return (
      <Card 
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.location}
        price={item.price}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <section className='cards-list'>
        {cards}    
      </section>   
    </div>
  )
}
