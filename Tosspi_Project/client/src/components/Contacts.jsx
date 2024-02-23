import React from "react";

export default function Contacts() {
    return (
        <contacts className = "contacts">
            <div className="contact-card">
                <img src="./imgs/Contact-Info/Matt-Jones-Headshot.jpg" alt="MJPic" className="MJ-Headshot" />
                <h3 className="ContactText">Mr. Arnold Jones</h3>
                <div className="PhoneNumber">
                   <img src="./imgs/Contact-Info/phone-contact.jpg" alt="Phone-pic" className="Phone-Pic" />
                   <p className="ContactText">(801) 347-5153</p>
                   <div className="EmailContact">
                       <img src="./imgs/Contact-Info/Email-contact.png" alt="Email-pic" className="Email-Pic" />
                       <p className="ContactText">tosspinc@gmail.com</p>
                   </div>
                </div>
            </div>
        </contacts>
    )
}