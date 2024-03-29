import React from "react";
import Pet from './Pet';
import FWPData from "./FWPData";

export default function Friend(fprops) {
    const pets = fprops.pets.map(pdata => {
        return (
            <div className="pet" key={pdata.id}>
                <div className="pets-name">Pets Name: {pdata.name}</div>
                <div className="pets-breed">Pets Breed: {pdata.breed}</div>
            </div>
        )
    })
    return (
        <div>
            <div className="friends-container">
                <div className="friends-profile">
                    <div className="friends-name">
                        Friends Name: {fprops.name}
                    </div>
                    <div className="friends-age">
                        Friends Age: {fprops.age}
                    </div>
                </div>
                <div className="pets-profile">{pets}</div>
            </div>
        </div>
    );
}
