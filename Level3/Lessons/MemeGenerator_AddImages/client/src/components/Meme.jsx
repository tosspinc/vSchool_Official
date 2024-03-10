import React from "react";
import MemesData from "../components/MemesData";

export default function Meme() {
    const [memeImage, setMemeImage] = React.useState('')

    function getMemeImage() {
    const memesArray = MemesData.data.memes  
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setMemeImage(memesArray[randomNumber].url)
    }   
    
    
        return (
        <main>
            <div className="meme-form">
                <input 
                    type="text" 
                    placeholder="Top Text"
                    className="meme-form-input"
                />
                <input 
                    type="text" 
                    placeholder="Bottom Text"
                    className="meme-form-input"
                />
                <button className="meme-button"
                onClick={getMemeImage}>Get A New Meme Image. 🖼</button>
            </div>
            <img src={memeImage} className="meme-image"/>
        </main>
    )
}