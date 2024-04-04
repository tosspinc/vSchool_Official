import React from "react";

export default function Button(props) {
  //set const variable fetchRandomColor.  
  const {
    fetchRandomColor,
  } = props
  
  //handleclick function for button.
  const handleClick = async () => {
    try {
      const newColor = await fetchRandomColor();  //assigns fetchRandomColor() to newColor.
    } catch (error) {
        console.error('Error fetching a random color: ', error); //displays error if unable to fetch color using axios.
    }
  }

  return (
    <button className='teal-button' 
      type='submit'
      name='submit'
      value="Submit"
      onClick={handleClick}
    >
      Get a random color
    </button>
  );
}
