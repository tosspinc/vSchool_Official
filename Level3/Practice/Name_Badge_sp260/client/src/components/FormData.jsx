import { useState } from "react";

export default function FormData(props) {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        birthPlace: '',
        phone: '',
        favFood: '',
        personalDescription: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        if (
            formData.fname.length < 3 ||
            formData.lname.length < 3 ||
            formData.email.length < 3 ||
            formData.birthPlace.length < 3 ||
            formData.phone.length < 3 ||
            formData.favFood.length < 3 ||
            formData.personalDescription.length < 3 
        ) {
            alert('Enter at least 3 characters in each field.')
            return
        }
        props.onSubmit({ ...formData })

        setFormData({
            fname: '',
            lname: '',
            email: '',
            birthPlace: '',
            phone: '',
            favFood: '',
            personalDescription: ''
        })
    } 

    const handleChange = (e) => {
        const { name, value } = e.target
        if( name === 'phone' && !/^\d+$/.test(value)) {
            return
        }
        
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            e.stopPropagation()
            document.querySelector('form').dispatchEvent(
                new Event('submit', {bubbles: true, cancelable: true})
            )
        }
    }
    
    const isFormEmpty = Object.values(formData).some(val => !val)

    return (
        <div >
        <form onSubmit={handleSubmit} className="form-data" onKeyDown={handleKeyDown}>
          <input 
            type="text" 
            name="fname"
            className="fname"
            value={formData.fname}
            placeholder="First Name"
            onChange={handleChange}
          />
          <input 
            type="text" 
            name="lname"
            className="lname"
            value={formData.lname}
            placeholder="Last Name"
            onChange={handleChange}
          />
          <input 
            type="email" 
            name="email"
            className="email"
            value={formData.email}
            placeholder="Email Address"
            onChange={handleChange}
          />
          <input 
            type="text" 
            name="birthPlace"
            className="birthPlace"
            value={formData.birthPlace}
            placeholder="Place of Birth"
            onChange={handleChange}
          />
          <input 
            type="tel" 
            name="phone"
            className="phone"
            value={formData.phone}
            placeholder="Phone Number"
            onChange={handleChange}
          />
          <input 
            type="text" 
            name="favFood"
            className="fav-food"
            value={formData.favFood}
            placeholder="Favorite Food"
            onChange={handleChange}
          />
          <textarea
            name="personalDescription"
            className="personal-description"
            placeholder="Tell us some information about yourself"
            value={formData.personalDescription}
            onChange={handleChange}
          />
          <input 
            type="submit"
            value="Submit"
            className="submit"
            disabled={isFormEmpty}
          />
        </form>
      </div>
    )
}
