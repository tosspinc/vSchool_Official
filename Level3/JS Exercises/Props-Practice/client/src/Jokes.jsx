import React from "react";

export default function Jokes(props) {
    return (
        <div>
            <h3>{props.Setup}</h3>
            <h3>{props.Punchline}</h3>
            <hr />
        </div>
    )
}