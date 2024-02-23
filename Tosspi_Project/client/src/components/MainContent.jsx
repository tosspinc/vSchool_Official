import React from "react"

export default function MainContent() {
    return (
        <div className="maincontent--info">
            <h1 className="maincontent--title">Fun facts about React.</h1>
            <ul className="maincontent--facts">
                <li>was first released in 2013.</li>
                <li>Originally created by Jordan Walke.</li>
                <li>Has well over 100K stars on GitHub.</li>
                <li>Maintained by Facebook.</li>
                <li>Powers thousands of enterprise apps, including mobile apps.</li>
            </ul>
        </div>
    )
}