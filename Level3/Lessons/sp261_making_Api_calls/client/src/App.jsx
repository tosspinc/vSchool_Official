import React from 'react'
import './App.css'

export default function App() {
  const [starWarsData, setStarWarsData] = React.useState({})

  fetch('https://swapi.dev/api/people/1')
    .then(res => res.json())
    .then(data => setStarWarsData(data))

  return (
    <div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  )
}
