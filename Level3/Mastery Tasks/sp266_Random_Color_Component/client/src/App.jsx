  import React, {useState} from "react";
  import axios from 'axios';
  import RandomColor from "./components/RandomColor";
  import Button from "./components/Button";
  import './App.css';


  export default function App() {
    const [color, setColor] = useState('#ffffff') 

    const fetchRandomColor = async () => {
          try {
            const response = await axios.get(`https://random-color.onrender.com/colors/random?timestamp=${new Date().getTime()}`);
            console.log(response.data.hex)
            setColor(response.data.hex);
            //return response.data.color; // Return the color value
          } catch (error) {
            console.error('Error fetching a random color: ', error);
            throw error; // Rethrow the error
          }
        };

      return (
      <div className='container'>
        <RandomColor fetchRandomColor= {fetchRandomColor} color = {color} />
        <Button fetchRandomColor = {fetchRandomColor} setColor = {setColor} />
      </div>
    )
  }  