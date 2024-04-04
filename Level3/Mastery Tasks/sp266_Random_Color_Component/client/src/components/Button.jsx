import React from "react";

export default function Button(props) {
  
  const {
    fetchRandomColor,
  } = props
  
  const handleClick = async () => {
    try {
      const newColor = await fetchRandomColor();
    } catch (error) {
        console.error('Error fetching a random color: ', error);
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
