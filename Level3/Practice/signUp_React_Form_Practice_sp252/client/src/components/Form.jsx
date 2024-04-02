import React from "react";

export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            email: '', 
            password: '', 
            passwordConfirm: '',
            joinNewsletter: true
        }
    )
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => ({
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value
            }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        if(formData.password === formData.passwordConfirm) {
            console.log('Successfully Signed Up.')
        } else {
            console.log('Passwords do not match!')
            return
        }

        if(formData.joinNewsletter) {
            console.log('Thanks for signing up for our newsletter!')
        }
    }


    return (
        <div className='form-container'>
            <form className='form' onSubmit={handleSubmit}>
                <input 
                    type='email'
                    placeholder='Email Address'
                    className='form-input'
                    onChange={handleChange}
                    email='email'
                    value={formData.email}
                />
    
                <input 
                    type='password'
                    placeholder='Password'
                    className='form-input'
                    onChange={handleChange}
                    name='password'
                    value={formData.Form}
                />
            
                <input
                    type='password'
                    placeholder='Confirm Password'
                    className='form-input'
                    onChange={handleChange}
                    name='passwordConfirm'
                    value={formData.passwordConfirm}
                />
            
                <div className='form-marketing'>
                    <input
                        id='okayToEmail'
                        type='checkbox'
                        name='joinedNewsletter'
                        onChange={handleChange}
                        checked={formData.joinNewsletter}
                    />
                    <label htmlFor='okayToEmail'>I want to receive your newsletter!</label>
                </div>
                <button className='form-submit'>Sign Up</button>
                <br />
                <br />
            </form>
        </div>
    )
}