import React from 'react'
import Header from './components/Header'
import Buttons from './components/Buttons'
import Footer from './components/Footer'
import Squares from './components/Squares'
import { useState } from 'react'
import soundFile from './assets/dj-airhorn-1012199.mp3'
import './App.css'


export default function App() {
  const [squareColors, setSquareColors] = useState(["antiquewhite", "antiquewhite", "antiquewhite", "antiquewhite"]);
  const [buttonClicked, setButtonClicked] = useState(false);

  const playSound = () => {
    const audio = new Audio(soundFile); //creates new Audio object with the sound file.
    audio.play(); //plays the sound
  
    setTimeout(() => {
      audio.pause(); //pauses the audio.
      audio.currentTime = 0; //resets the audio time to the beginning.
    }, 1500); //sets the sound to play for 1.5 seconds.
  }
  
  const handleButtonClick = (id) => {
    if (id === 1) {
      if(!buttonClicked) {
        const newColors = squareColors.map(() => {
          return Math.random() < 0.5 ? 'teal' : 'antiquewhite';
        }) 
        setSquareColors(newColors);
        //adding the following block of code changes whatever is assigned to the square will then become the opposite color. 
        //without this line colors are randomly assigned to the squares.
        //setButtonClicked(true); 
      //} else {
        //const newColors = squareColors.map((color) => {
        //  return color === 'teal' ? 'antiquewhite' : 'teal'
        //});
        //setSquareColors(newColors);
      }
    } else if (id === 2) {
        playSound();
    } else if (id === 3) {
      const newColors = [...squareColors]
      if (newColors[0] === 'purple' && newColors[1] === 'purple') {
        newColors[0] = 'antiquewhite'
        newColors[1] = 'antiquewhite'
      } else {
        newColors[0] = 'purple'
        newColors[1] = 'purple'
      }
      setSquareColors(newColors);
    } else if (id === 4) {
      const newColors = [...squareColors]          
      newColors[2] = newColors[2] === 'blue' ? 'antiquewhite' : 'blue'
      setSquareColors(newColors)
    } else if (id === 5) {
      const newColors = [...squareColors]          
      newColors[3] = newColors[3] === 'blue' ? 'antiquewhite' : 'blue'
      setSquareColors(newColors)
    }else if (id === 6) {
      const newColors = [...squareColors]
      newColors[0] = 'red'
      newColors[1] = 'antiquewhite'
      newColors[2] = 'antiquewhite'
      newColors[3] = 'antiquewhite'
      setSquareColors(newColors);
    } else if (id === 7) {
      const newColors = [...squareColors]
      newColors[0] = 'antiquewhite'
      newColors[1] = 'yellow'
      newColors[2] = 'antiquewhite'
      newColors[3] = 'antiquewhite'
      setSquareColors(newColors)
    }else if (id === 8) {
      const newColors = [...squareColors]
      newColors[0] = 'antiquewhite'
      newColors[1] = 'antiquewhite'
      newColors[2] = 'blue'
      newColors[3] = 'antiquewhite'
      setSquareColors(newColors);
    } else if (id === 9) {
      const newColors = [...squareColors]
      newColors[0] = 'antiquewhite'
      newColors[1] = 'antiquewhite'
      newColors[2] = 'antiquewhite'
      newColors[3] = 'green'
      setSquareColors(newColors)
    }
  }
  
  return (
    <div className='app-container'>
      <Header />
      <div className='dj-container'>
        <Squares squareColors={squareColors}/>
       <Buttons onClick={handleButtonClick}/>
      </div>
      <Footer />
    </div>
  )
}