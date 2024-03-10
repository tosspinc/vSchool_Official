import React from 'react'
import './App.css'

export default function App() {
  const [isGoingOut, setIsGoingOut] = React.useState(true);

  function changeMind() {
    setIsGoingOut(prevState => !prevState)
  }

  return (
    <div className='container'>
      <h1 className='container-title'>Do I feel like going out tonight?</h1>
        <div onClick={changeMind} className='container-value'>  {/*when click on yes it changes to no and then click again changes back to yes.*/}
        <h1>{isGoingOut ? 'Yes' : 'No'}</h1>
      </div>
    </div>
  )
}
