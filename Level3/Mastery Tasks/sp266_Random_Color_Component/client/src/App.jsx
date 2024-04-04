  import React, {useState} from "react";
  import axios from 'axios';
  import RandomColor from "./components/RandomColor";
  import Button from "./components/Button";
  import './App.css';


  export default function App() {
    //declares color and setColor as constant variables.
    const [color, setColor] = useState('#ffffff') 

    //declares fetchRandomColor as a constant variable
    const fetchRandomColor = async () => {
          try {
            //declares response as constant variable and call random color from web using axios.get.
            const response = await axios.get(`https://random-color.onrender.com/colors/random?timestamp=${new Date().getTime()}`);
            console.log(response.data.hex)  //test displaying color hex code to console to verify working.
            setColor(response.data.hex);    //sets response.data.hex to setColor - new color state.
          } catch (error) {
            console.error('Error fetching a random color: ', error);
            throw error; // Rethrow the error
          }
        };

      return (
      <div className='container'>
        {/*calls RandomColor and Button components. call props with components.*/}
        <RandomColor fetchRandomColor= {fetchRandomColor} color = {color} />
        <Button fetchRandomColor = {fetchRandomColor} setColor = {setColor} />
      </div>
    )
  }  