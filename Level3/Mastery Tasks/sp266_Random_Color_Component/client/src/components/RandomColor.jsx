import React, { useEffect } from "react";

export default function RandomColor(props) {
  
  const { 
    color, 
    fetchRandomColor
   } = props

  

//   const fetchRandomColor = async () => {
//     try {
//       const response = await axios.get(`https://random-color.onrender.com/colors/random?timestamp=${new Date().getTime()}`);
//       console.log(response)
//       setColor(response.data.color);
//       return response.data.color; // Return the color value
//     } catch (error) {
//       console.error('Error fetching a random color: ', error);
//       throw error; // Rethrow the error
//     }
//   };

useEffect(() => {
    fetchRandomColor();
  }, []);

  console.log('color: ', color);

  return (
    <div>
      <div className='color-box' style={{ backgroundColor: color}}>
        Color: {color}
      </div>
    </div>
  );
}
