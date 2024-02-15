import React from "react";
/*I can destruct the process by using export default function Contact({contactsImg, contactsName, contactsNumber, contactsEmail}) and removing props.xxxx below or by typing out the entire normal sturcture of export default function Contact (props) { <img src=<props.contactsImg} etc.*/

/*this is the normal destructured method of using props in react. however, using Contact(props) object may be better as most programmers understand this method. it is a personal choice.

export default function Contact(props) {
    return (
        <div className=g'contact-card'>
            <img src={props.contactsImg}>
            <h3>{props.contactsName}</h3>
            <div className='contact-phone'>
                <img src='../images/PhoneIcon.png' />
                <p>{props.contactsNumber}</p>
            </div>
            <div className='contact-email'>
                <img src='../images/email_Icon.png'/>
                <p>{props.contactsEmail}</p>
            </div>    
        >/div>
    )
}*/

export default function Contact({contactsImg, contactsName, contactsNumber, contactsEmail}) {
    return (
        <div className='contact-card'>
            <img src={contactsImg}/>
            <h2>{contactsName}</h2>
            <div className='contact-phone'>
                <img src="../images/PhoneIcon.png" /> 
                <p>{contactsNumber}</p>
            </div>
            <div className='contact-email'>
                <img src='../images/email_Icon.png'/>
                <p>{contactsEmail}</p>
            </div>
        </div>)
}