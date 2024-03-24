import React from "react"
import Square from "./Square"

export default function Squares({ squareColors }) {
    
    return ( 
        <div className="squares-container">
            {squareColors.map((color, index) => (
                <Square key={index} backgroundColor={color} />
            ))}
        </div>
    )
}