import React from "react"
import Carousel from "./Card"
import Card from "./Card"
import Contacts from "./Contacts"

export default function MainContent() {
    return (
        <div className="maincontent--info">
            <h1 className="maincontent--title">Level 3 React project!</h1>
            <h2>Working on class project.</h2>
            <Card />
            <Contacts />
       </div>
    )
}