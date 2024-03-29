import React from "react";

export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            firstName: '', 
            lastName: '', 
            email: '', 
            comments:'',
            isFriendly: false
        }
    )
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                    ...prevFormData,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

        return (
        <form>
            <input 
                type='text'
                placeholder='First Name'
                onChange={handleChange}
                name='firstName'
                value={formData.firstName}

            />
            <input 
                type='text'
                placeholder='Last Name'
                onChange={handleChange}
                name='lastName'
                value={formData.Form}
            />
            <input
                type='email'
                placeholder='Email'
                onChange={handleChange}
                email='email'
                value={formData.email}
            />
            <textarea 
                placeholder="Comments"
                onChange={handleChange}
                name="comments"
                value={formData.comments}           
            />
            <label>
                <input
                    type='checkbox'
                    name='isFriendly'
                    id='isFriendly'
                    onChange={handleChange}
                />Are you a friendly person?
            </label>
        </form>
    )
}