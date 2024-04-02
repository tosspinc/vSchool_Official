//import React from "react";

export default function NameBadgeComponent(props) {
    const index = props.index
    //title color alternates between red and blue for each entry
    const isEven = index % 2 === 0
    const backgroundColor = isEven ? 'red' : 'blue'

    //to alternate between red, white and blue - which state is 3 colors - with each entry the code would be as follows:
    //const colors = ['red', 'white', 'blue']
    //const colorIndex = index % colors.length
    //const backgroundColor = colors[colorIndex]
    const badgeStyle = {
        backgroundColor: backgroundColor,
    }

    return (
        <div className="name-badge-div">
          <h4 className="badgeTitle" style={badgeStyle}>Badge:</h4>
          <div className="name-badge">
            <p className="fullName">
              <b>Name:</b> {props.formData.fname} {props.formData.lname}
            </p>
            <p className="phoneNumber">
              <b>Phone:</b> {props.formData.phone}
            </p>
            <p className="placeOfBirth">
              <b>Place of Birth:</b> {props.formData.birthPlace}
            </p>
            <p className="favFood">
              <b>Favorite Food:</b> {props.formData.favFood}
            </p>
            <p className="emailAddress">
              <b>Email:</b> {props.formData.email}
            </p>
            <div className="personal-description">{props.formData.description}</div>
          </div>
        </div>
      )
}