import React from "react";

export default function Pet(pprops) {
    return (
        <div className="pets-container">
            <div className="pets-profile">
                <div className="pets-name">
                    Pet Name: {pprops.name}
                </div>
                <div className="pets-breed">
                    Pet Breed: {pprops.breed}
                </div>
            </div>
        </div>
    );
}