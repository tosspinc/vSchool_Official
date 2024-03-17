    import React from "react";
    import Button from "./Button";

    export default function Buttons({ onClick }) {
        const buttonType = [
            {id: 1, title: "Small Time DJ"},
            {id: 2, title: "DJ Noise Maker"},
            {id: 3, title: "Party DJ"},
            {id: 4, title: "Professional DJ Left "},
            {id: 5, title: "Professional DJ RIght"},
            {id: 6, title: "Big Time DJ # 1"},
            {id: 7, title: "Big Time DJ # 2"},
            {id: 8, title: "Big Time DJ # 3"},
            {id: 9, title: "Big Time DJ # 4"}
        ];

        return (
            <div className="button-container">
                {buttonType.map(({ id, title }) => (
                    <Button className="dj-button"
                        key={id}
                        title={title}
                        onClick={() => {
                            onClick(id);
                        }}
                    />
                ))}
            </div>
        );
    }