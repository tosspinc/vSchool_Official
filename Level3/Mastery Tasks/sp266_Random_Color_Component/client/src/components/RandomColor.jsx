import React, { useEffect } from "react";

export default function RandomColor(props) {
  //set constant variable and equals them to props.
  const { 
    color, 
    fetchRandomColor
   } = props

//calls the fetchRandomColor object.
   useEffect(() => {
    fetchRandomColor();
  }, []);

  console.log('color: ', color); //test run of color in console

  return (
    <div>
      <div className='color-box' style={{ backgroundColor: color}}>
        Color: {color}   {/*puts the color object in the box called color-box*/}
      </div>
    </div>
  );
}
