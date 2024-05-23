import React, { useState } from 'react';
import './All_Style.css';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, phone, course } = formData;
        var phonenumber = "+919576289718";

        var url = "https://wa.me/" + phonenumber + "?text="
            + "Name : " + name + "%0a"
            + "Email : " + email + "%0a"
            + "Phone: " + phone + "%0a"
            + "Course Interested : " + course
            + "%0a%0a"
            + "To Archer Foundation.";

        window.open(url, '_blank').focus();
    };

    return (
        <form style={{ marginTop: "12rem" }} className="registration-form" onSubmit={handleSubmit}>
            <h2 style={{ fontFamily: "Times-New-Roman" }} >Join Our Institute</h2>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label>
                Phone:
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </label>
            <label>
                Course:
                <input type="text" name="course" value={formData.course} onChange={handleChange} required />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default RegistrationForm;
