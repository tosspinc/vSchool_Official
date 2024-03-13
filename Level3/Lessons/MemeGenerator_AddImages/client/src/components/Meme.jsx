import React from "react";
import MemesData from "../components/MemesData";

export default function Meme() {
    //const [memeImage, setMemeImage] = React.useState('http://i.imgflip.com/1bij.jpg')

    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    const [allMemeImages, setAllMemeImages] = React.useState(MemesData)

    function getMemeImage() {
    const memesArray = allMemeImages.data.memes  
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }))

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
            <img src={meme.randomImage} className="meme-image"/>
        </main>
    )
}