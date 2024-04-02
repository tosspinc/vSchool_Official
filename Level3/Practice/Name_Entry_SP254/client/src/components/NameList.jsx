import React from "react";

export default function NameList(props) {
    return (
        <div className='namelist'>
            <h1>Contacts</h1>
            <ul>
                {props.contacts && props.contacts.map(
                    (contact) => 
                        <li className='nameListDiv'>
                            <p className='firstName'>{contact.fname}</p>
                            <p className='lastName'>{contact.lname}</p>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}