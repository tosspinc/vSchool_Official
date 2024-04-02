import React from "react";

export default function ContactInfo({formData}) {
    return (
        <div className='contactinfo'>
            <h5>{formData.fname} {formData.lname}</h5>
        </div>
    )
}