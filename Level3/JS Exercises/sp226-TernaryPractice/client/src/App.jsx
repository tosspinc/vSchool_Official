import React from 'react'
import './App.css'

export default function App() {
  const isGoingOut = true;

  return (
    <div className='container'>
      <h1 className='container-title'>Do I feel like going out tonight?</h1>
      <div className='container-value'>
        <h1>{isGoingOut === true ?  'Yes' : 'No'}</h1>
      </div>
    </div>
  )
}
