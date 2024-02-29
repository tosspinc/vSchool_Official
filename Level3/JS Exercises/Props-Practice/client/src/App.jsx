import React from 'react'
import './App.css'
import Jokes from './Jokes'

export default function App() {
  return (
    <div className='jokes'>
      <Jokes 
        Setup='I got my daughter a fridge for her birthday.'
        Punchline="I can't wait for her face to light up when she opens it."
      />
      <Jokes 
        Setup="How did the hacker escape the police?"
        Punchline="He just Ransomware."
      />
      <Jokes 
        Setup="Why don't pirates travel on mountain roads?"
        Punchline="Scurvy."
      />
      <Jokes 
        Setup="Why do bees stay in the dive during the winter?"
        Punchline="Swarm."
      />
      <Jokes 
        Setup="What's the best thing about Switzerland?"
        Punchline="I don't know, but the flag is a plus."
      />
    </div>
  )
}
