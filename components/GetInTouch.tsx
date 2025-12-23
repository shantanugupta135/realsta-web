"use client";
import { useState } from 'react';
import './GetInTouch.css';
import { submitForm, FormData } from '../services/formService';

function GetInTouch() {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        emailId: "",
        phone: "",
        dropdown: "",
        message: "",
    });

    // Track touched fields
    const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev: any) => ({
            ...prev,
            [name]: value,
        }));
        setTouched(prev => ({
            ...prev,
            [name]: true,
        }));
    };

    const handleSubmit = async () => {
        if (!isFormValid) {
            // Mark all required fields as touched to show red border for invalid/empty fields
            const touchedFields: { [key: string]: boolean } = {};
            requiredFields.forEach(field => {
                touchedFields[field] = true;
            });
            setTouched(prev => ({
                ...prev,
                ...touchedFields,
            }));
            // Force a re-render by returning early
            return;
        }
        try {
            const message = await submitForm(formData);
            alert(message);
            setFormData({
                firstName: "",
                lastName: "",
                emailId: "",
                phone: "",
                dropdown: "",
                message: "",
            });
            setTouched({});
        } catch (error: any) {
            alert("Error: " + error.message);
        }
    };

    // List of required fields except 'message' and 'whatYouNeed'
    const requiredFields = [
        "firstName",
        "lastName",
        "emailId",
        "phone",
        "dropdown"
    ];

    // Simple email validation
    const isEmailValid = (email: string) =>
        /^[\w\.-]+@[\w\.-]+\.\w{2,}$/.test(email);

    const isFormValid =
        requiredFields.every(field => formData[field as keyof typeof formData]?.trim()) &&
        isEmailValid(formData.emailId) &&
        formData.phone.length === 10;

    // Validation helpers
    const isFieldInvalid = (field: string) => {
        if (!touched[field]) return false; // Only show red border if touched

        if (field === "whatYouNeed") return false; // Never show red for this field

        if (field === "emailId") {
            return formData.emailId.trim() === "" || !isEmailValid(formData.emailId);
        }
        if (field === "phone") {
            return formData.phone.trim() === "" || formData.phone.length !== 10;
        }
        // For other fields, show red if empty
        return formData[field as keyof typeof formData]?.trim() === "";
    };

    return (
        <section className='pb-0'>
            <div className="customContainer">
                <div className="git-form-wrapper px-3 px-md-4">
                    <div className="row">
                        <div className="col-12 col-md-5 d-flex flex-column justify-content-center">
                            <div className='git-heading'>Get <span className='git-heading-part'>Started</span></div>
                            <div className='git-subheading mt-4'>Looking for asset management, leasing solutions, or investment advice? Explore our services today.</div>
                        </div>
                        <div className="col-12 col-md-5 mt-4 mt-md-0">
                            <div className="git-form">
                                <form className='git-myform d-flex flex-column gap-3'>
                                    <div className="row">
                                        <div className="col-12 col-md-6 mt-3">
                                            <input
                                                type="text"
                                                className={`form-control bg-transparent border-0 border-bottom text-white${isFieldInvalid('firstName') ? ' border-danger' : ''}`}
                                                placeholder="First Name *"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                onBlur={() => setTouched(prev => ({ ...prev, firstName: true }))}
                                            />
                                        </div>
                                        <div className="col-12 col-md-6 mt-3">
                                            <input
                                                type="text"
                                                className={`form-control bg-transparent border-0 border-bottom text-white${isFieldInvalid('lastName') ? ' border-danger' : ''}`}
                                                placeholder="Last Name *"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                onBlur={() => setTouched(prev => ({ ...prev, lastName: true }))}
                                            />
                                        </div>
                                        <div className="col-12 col-md-6 mt-3">
                                            <input
                                                type="email"
                                                className={`form-control bg-transparent border-0 border-bottom text-white${isFieldInvalid('emailId') ? ' border-danger' : ''}`}
                                                placeholder="Your Email *"
                                                name="emailId"
                                                value={formData.emailId}
                                                onChange={handleChange}
                                                onBlur={() => setTouched(prev => ({ ...prev, emailId: true }))}
                                            />
                                        </div>
                                        <div className="col-12 col-md-6 mt-3">
                                            <input
                                                type="tel"
                                                className={`form-control bg-transparent border-0 border-bottom text-white${isFieldInvalid('phone') ? ' border-danger' : ''}`}
                                                placeholder="Phone Number *"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={e => {
                                                    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                                                    setFormData(prev => ({
                                                        ...prev,
                                                        phone: value,
                                                    }));
                                                }}
                                                onBlur={() => setTouched(prev => ({ ...prev, phone: true }))}
                                                minLength={10}
                                                maxLength={10}
                                                pattern="\d{10}"
                                            />
                                        </div>
                                        <div className="col-12 col-md-12 mt-3">
                                            <select
                                                className={`form-select bg-transparent border-0 border-bottom text-white${isFieldInvalid('dropdown') ? ' border-danger' : ''}`}
                                                name="dropdown"
                                                onChange={handleChange}
                                                value={formData.dropdown}
                                                onBlur={() => setTouched(prev => ({ ...prev, dropdown: true }))}
                                            >
                                                <option value="">What do you need? *</option>
                                                <option value="investment">Investment</option>
                                                <option value="leasing">Leasing</option>
                                            </select>
                                        </div>
                                        <div className="col-12 mt-3">
                                            <textarea
                                                className="form-control bg-transparent border-0 border-bottom text-white"
                                                placeholder="Message"
                                                rows={3}
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-4 col-md-2 d-flex flex-column justify-content-center align-items-center mt-4 mt-md-0">
                            <button
                                className='btn-primary-custom'
                                onClick={handleSubmit}
                                type="button"
                            >
                                Submit<i className="fa-solid fa-arrow-right ms-2 au-learn-more-button"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GetInTouch;