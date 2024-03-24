import React from "react"

export default function Square({backgroundColor}) {
    const squareBGStyles = {
        backgroundColor: backgroundColor
    }

    return (
        <div 
            className="squareStyles" 
            style={squareBGStyles} 
        >
        </div>

    )
}